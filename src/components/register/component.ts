import Container, {ContainerType} from '@/models/Container';
import * as firebase from 'firebase'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class RegisterComponent extends Vue {

  email = '';
  password = '';
  error = '';

  register() {
    this.$validator.validateAll().then((result: any) => {
      if(result) {
        this._register();
      }
    }).catch(() => {
      return false
    });
  }

  _register() {
    this.$dao.register(this.email, this.password).then(
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