import DAO from "@/dao/DAO";
import Container, {ContainerType} from "@/models/Container";
import Item from "@/models/Item";
import * as firebase from "firebase";
import Vue from 'vue'
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;

require('firebase/firestore');

declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
    readonly $dao: FirebaseDAO
  }
}

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

  async saveItem(item: Item) {
    if (!this.user || !item.idContainer) {
      return false;
    }

    const data = {
      name: item.name,
      colourGroup: item.colourGroup,
      laundryCategory: item.laundryCategory,
      packingCategory: item.packingCategory,
      subcategory: item.subcategory || null,
      idContainer: item.idContainer,
      dirty: item.isDirty()
    };

    if(item.id) {
      const itemRef = this.db.collection("containers/" + item.idContainer + "/items").doc(item.id);
      return itemRef.set(data, { merge: true });
    }

    return this.db.collection("containers/" + item.idContainer + "/items").add(data);
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
      return undefined;
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

  async getContainerItems(container: Container): Promise<Item[]|undefined> {
    if (!this.user) {
      return undefined;
    }

    let dbData = await this.db.collection("containers/" + container.id + "/items").get();

    return Promise.all(dbData.docs.map((data: QueryDocumentSnapshot) => {
      const doc = data.data();
      return new Item(
        doc.name,
        doc.colourGroup,
        doc.laundryCategory,
        doc.packingCategory,
        doc.subcategory,
        doc.idContainer,
        doc.dirty,
        data.id
      );
    }));
  }

  async register(email: string, password: string) {
    return this.app.auth().createUserWithEmailAndPassword(email, password);
  }
}