import DAO from "@/dao/DAO";
import Container, {ContainerType} from "@/models/Container";
import Item from "@/models/Item";
import * as firebase from "firebase";
import Vue from 'vue'
import DocumentReference = firebase.firestore.DocumentReference;
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
import {PackingCategory} from "../models/Item";

require('firebase/firestore');

export default class FirebaseDAO implements DAO {
  private app: firebase.app.App;
  private db: firebase.firestore.Firestore;
  private user: firebase.User | null;

  /** tego używamy tylko przy ładowaniu strony, później korzystamy z this.user **/
  private readonly auth: Promise<firebase.User | null>;

  static install(vue: typeof Vue, options: any): void {
    const dao = new FirebaseDAO(options);
    Object.defineProperty(Vue.prototype, '$dao', {
      get () { return dao }
    })
  }

  constructor(options: any) {
    this.app = firebase.initializeApp(options);
    this.db = this.app.firestore();

    this.auth = new Promise<firebase.User | null>(resolve => {
      this.app.auth().onAuthStateChanged(user => {
        this.user = user;
        resolve(user);
      });
    });

    const settings = {timestampsInSnapshots: true};
    this.db.settings(settings);
  }

  async getUser() {
    return this.user || await this.auth;
  }

  async login(email: string, password: string) {
    return this.app.auth().signInWithEmailAndPassword(email, password);
  }

  async logout() {
    this.user = null;
    return this.app.auth().signOut();
  }

  async saveContainer(container: Container) {
    if (!this.user) {
      return false;
    }

    const data = {
      name: container.name,
      type: container.type,
      idUser: this.user.uid
    };

    if(container.id) {
      const containerRef = this.db.collection('containers').doc(container.id);
      return containerRef.set(data, { merge: true });
    }

    return this.db.collection("containers").add(data);
  }

  async getItemById(id: string, container: string): Promise<Item|undefined> {
    if (!this.user) {
      throw new Error('Not logged in');
    }

    const itemRef = await this.db.collection("containers/" + container + "/items").doc(id).get();
    if(itemRef.exists) {
      return this.dbDataToItem(itemRef, container);
    }
  }

  async saveItem(item: Item): Promise<DocumentReference|void> {
    if (!this.user || !item.idContainer) {
      throw new Error('Not logged in');
    }

    let url;
    if(item.image instanceof File) {
      url = await this.saveImage(item.image);
    }

    const data = {
      name: item.name,
      colourGroup: item.colourGroup,
      laundryCategory: item.laundryCategory,
      packingCategory: item.packingCategory,
      subcategory: item.subcategory || null,
      idContainer: item.idContainer,
      image: url
    };

    if(item.id) {
      const itemRef = this.db.collection("containers/" + item.idContainer + "/items").doc(item.id);
      return itemRef.set(data, { merge: true });
    }

    return this.db.collection("containers/" + item.idContainer + "/items").add(data);
  }

  async moveItem(item: Item, to: Container) {
    if (!this.user) {
      throw new Error('Not logged in');
    }

    let itemRef = await this.db.collection("containers/" + item.idContainer + "/items").doc(item.id);

    let dbData = await itemRef.get();

    if(dbData.exists) {
      const doc = dbData.data()!;
      doc.idContainer = item.idContainer = to.id;
      this.db.collection("containers/" + to.id + "/items").add(doc);
      itemRef.delete();
    }

    return item;
  }

  deleteItem(item: Item) {
    if (!this.user) {
      throw new Error('Not logged in');
    }

    return this.db.collection("containers/" + item.idContainer + "/items").doc(item.id).delete();
  }

  async getContainers(): Promise<Container[]> {
    if (!this.user) {
      return [];
    }

    let dbData = await this.db.collection('containers')
      .where('idUser', '==', this.user.uid)
      .get();

    return Promise.all(dbData.docs.map((data: QueryDocumentSnapshot) => {
      const doc = data.data();
      return new Container(doc.name, doc.type, data.id);
    }));
  }

  async getContainerById(id: string): Promise<Container|undefined> {
    if (!this.user) {
      throw new Error('Not logged in');
    }

    let dbData = await this.db.collection('containers')
      .where('idUser', '==', this.user.uid)
      .where(firebase.firestore.FieldPath.documentId(), '==', id)
      .limit(1)
      .get();

    let containers = await Promise.all(dbData.docs.map((data: QueryDocumentSnapshot) => {
      const doc = data.data();
      return new Container(doc.name, doc.type, data.id);
    }));

    return containers.pop();
  }

  async getContainerItems(container: Container): Promise<Item[]> {
    if (!this.user) {
      throw new Error('Not logged in');
    }

    let dbData = await this.db.collection("containers/" + container.id + "/items").get();

    return Promise.all(dbData.docs.map(doc => {
      return this.dbDataToItem(doc, container.id!);
    }));
  }

  async getContainerItemsOfPackingCategory(container: Container, type: PackingCategory): Promise<Item[]> {
    if (!this.user) {
      throw new Error('Not logged in');
    }

    let dbData = await this.db.collection("containers/" + container.id + "/items")
      .where('packingCategory', '==', type).get();

    return Promise.all(dbData.docs.map(doc => {
      return this.dbDataToItem(doc, container.id!);
    }));
  }

  async getContainerItemsCount(container: Container): Promise<number> {
    if (!this.user) {
      throw new Error('Not logged in');
    }

    let dbData = await this.db.collection("containers/" + container.id + "/items").get();

    return dbData.docs.length;
  }

  async register(email: string, password: string) {
    return this.app.auth().createUserWithEmailAndPassword(email, password);
  }

  async saveImage(file: File): Promise<string|undefined> {
    if (!this.user) {
      throw new Error('Not logged in');
    }

    const metadata = {
      'contentType': file.type
    };

    const storageRef = this.app.storage().ref();

    let snapshot = await storageRef.child('images/' + file.name).put(file, metadata);

    if(snapshot) {
      // Let's get a download URL for the file.
      return snapshot.ref.getDownloadURL();
    }

    return undefined;
  }

  dbDataToItem(data: QueryDocumentSnapshot | DocumentSnapshot, container: string): Item {
    const doc = data.data()!;
    return new Item(
      doc.name,
      doc.colourGroup,
      doc.laundryCategory,
      doc.packingCategory,
      doc.subcategory,
      container,
      doc.image,
      data.id
    )
  }
}