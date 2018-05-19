import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import Item from "@/models/Item";
import {ContainerType} from "@/models/Container";

@Component
export default class ContainerComponent extends Vue {
  @Prop()
  type: ContainerType;

  items: Item[] = [];

  created() {
    //pobieramy z firebase itemy co mają ustawiony typ containera na otrzymany
    //@todo Maciek
    //zmapować na klasę Item

    this.items.push(new Item("Koszulka"))
  }
}