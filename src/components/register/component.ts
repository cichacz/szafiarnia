import Vue from 'vue'
import Component from 'vue-class-component'
import * as firebase from 'firebase'
import VeeValidate from 'vee-validate';

@Component
export default class RegisterComponent extends Vue {

    email = '';
    password = '';
    passwordConfirmation = '';

    validateBeforeSubmit() {
        const _this = this;
        this.$validator.validateAll()
        .then(function(response) {
          console.log('Success ' + response);
          _this.register();
        })
        .catch(function(e) {
          console.log('Error ' + e.message);
          alert('Oops. ' + e.message);
        })
    }

    register() {
        const _this = this;
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
            function(user: firebase.User) {
                console.log('User registered');
                _this.makeLogin(_this.email, _this.password);
            },
            function(err: Error) {
                alert('Oops. ' + err.message);
            },
        );
    }

    makeLogin(email: string, password: string) {
        const _this = this;
        firebase.auth().signInWithEmailAndPassword(email, password).then(
        function(user: firebase.User) {
            _this.$router.push('dashboard');
        },
        function(err: Error) {
            alert('Ops. ' + err.message);
        });
    }

}