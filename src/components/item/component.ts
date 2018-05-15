import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import Item from "@/models/Item";

@Component
export default class ItemComponent extends Vue {
  @Prop()
  item: Item;
}