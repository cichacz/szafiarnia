import Vue from 'vue'
import Component from 'vue-class-component'
import * as firebase from 'firebase'

@Component
export default class LoginComponent extends Vue {

    email = '';
    password = '';

    login() {
        const _this = this;
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            function(user: firebase.User) {
                _this.$router.push('dashboard');
            },
            function(err: Error) {
                alert('Oops. ' + err.message);
            }
        );
    }
}