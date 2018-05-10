import Vue from 'vue'
import Component from 'vue-class-component'
import * as Cookie from 'js-cookie'
import 'vue-router'

@Component
export default class LoginComponent extends Vue {
  doLogin() {
    Cookie.set('auth', '1');
    this.$router.push({name: 'panel'});
  }
}