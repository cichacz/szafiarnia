import Vue from 'vue'
import Component from 'vue-class-component'
import * as firebase from 'firebase'

@Component
export default class LoginComponent extends Vue {

  email = '';
  password = '';
  error = '';

  login() {
    this.$dao.login(this.email, this.password).then(
      (user: firebase.User) => {
        this.$router.push({name: 'panel'});
      }, (err: Error) => {
        this.error = err.message;
      }
    );
  }
}