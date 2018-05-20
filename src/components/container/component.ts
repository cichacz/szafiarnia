import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import Item from "@/models/Item";
import Container from "@/models/Container";
import {ContainerType} from "@/models/Container";
import ContainerDAO from '@/dao/ContainerDAO';

const firebase = require('firebase');
require('firebase/firestore');

@Component
export default class ContainerComponent extends Vue {
  @Prop()
  type: ContainerType;

  items: Item[] = [];

  created() {
    ContainerDAO.getItemsWithContainerType('Default', (items:any) => this.items = items);
  }
}