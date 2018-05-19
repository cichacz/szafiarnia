import Vue from 'vue'
import Component from 'vue-class-component'
import * as firebase from 'firebase'
import VeeValidate from 'vee-validate';

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
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      (user: firebase.User) => {
        this.$router.push({name: 'panel'});
      }, (err: Error) => {
        console.log('Firebase sign in after registration: ' + err.message);
      });
  }

}