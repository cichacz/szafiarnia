import Vue from 'vue'
import Component from 'vue-class-component'
import * as firebase from 'firebase'
import 'vue-router'

@Component
export default class DashboardComponent extends Vue {
    created() {
        //pobieramy z firebase
        //@todo Maciek
        //zmapować na klasę Item
    }

    logout() {
        firebase.auth().signOut().then(() => {
            this.$router.replace('login');
        });
    }
}