import {ContainerType} from "@/models/Container";
import {ColourGroup, LaundryCategory, PackingCategory} from "@/models/Item";
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class PackingComponent extends Vue {
  tripLength: number = 0;
}