import Vue from 'vue'
import Item from "@/models/Item";
import Container from "@/models/Container";
import {ContainerType} from "@/models/Container";

const firebase = require('firebase');
require('firebase/firestore');

export default class ContainerDAO {

    static getItemsWithContainerType(containerType: string, callback: any) {
        const db = Vue.prototype.$db;
        const user = firebase.auth().currentUser;
        const result = db.collection('containers').where('idUser', '==', user.uid)
        .where('type', '==', containerType)
        .limit(1)
        .get()
        .then(function(container: any) {
            container.forEach((container:any) => {
                db.collection("containers/" + container.id + "/items").get()
                .then((items: any) => {
                    items = items.docs.map((item: any) => {
                        var result = new Item(item.data().name, item.data().isDirty);
                        result.id = item.id;
                        return result;
                    })
                    callback(items);
                })
            });
        })
        .catch(function(error: Error) {
            console.log('Error getting containers: ', error);
        });
    }

    static saveItem(item: string) {

    }
}