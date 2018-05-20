import Vue from 'vue'
import Component from 'vue-class-component'
import * as firebase from 'firebase'
import VeeValidate from 'vee-validate';
import Container from '@/models/Container';
import {ContainerType} from "../../models/Container";

@Component
export default class RegisterComponent extends Vue {

  email = '';
  password = '';
  error = '';

  register() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
      (user: firebase.User) => {
        console.log('User registered');
        this._makeLogin(this.email, this.password);
      },(err: Error) => {
        console.log('Firebase register: ' + err.message);
        this.error = err.message;
      },
    );
  }

  private _makeLogin(email: string, password: string) {
    this.$dao.login(email, password).then(
      (user: firebase.User) => {

        //tworzymy domyślne kontenery
        this.$dao.saveContainer(new Container('Szafa'));
        this.$dao.saveContainer(new Container('Pranie', ContainerType.Dirty));
        this.$dao.saveContainer(new Container('Wyjazd', ContainerType.Trip));

        this.$router.push({name: 'panel'});
      }, (err: Error) => {
        console.log('Firebase sign in after registration: ' + err.message);
      });
  }

}