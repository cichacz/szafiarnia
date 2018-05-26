import {ContainerType} from "@/models/Container";
import {ColourGroup, LaundryCategory, PackingCategory} from "@/models/Item";
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Component from 'vue-class-component'
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

@Component
export default class PackingComponent extends Vue {
  tripLength: number = 0;
}