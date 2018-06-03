import '@/modules/dao'
/** global imports with typings etc **/
import 'bootstrap'
import 'vee-validate'
import Vue from 'vue'
import VueI18n from 'vue-i18n';
import Component from 'vue-class-component'
import 'vuex'

// Register the router hooks with their names
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate', // for vue-router 2.2+
]);

@Component
export default class AppComponent extends Vue {
}