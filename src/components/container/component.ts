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
    console.log(this.type);
    //pobieramy z firebase itemy co mają ustawiony typ containera na otrzymany
    //@todo Maciek
    //zmapować na klasę Item

    this.items.push(new Item("Koszulka"))
    this.items.push(new Item("Spodnie"))
    this.items.push(new Item("Skarpety"))
    this.items.push(new Item("Kurtka"))
    this.items.push(new Item("Czapka"))
    this.items.push(new Item("Slipy"))
    this.items.push(new Item("Golf"))
    this.items.push(new Item("Sweter"))
    this.items.push(new Item("Buty"))
    this.items.push(new Item("Bizuteria"))
    this.items.push(new Item("Rajstopy"))
    this.items.push(new Item("Pidzama"))
    this.items.push(new Item("Biustonosz"))
    this.items.push(new Item("Krawat"))
    this.items.push(new Item("Sukienka"))
    this.items.push(new Item("Spodnica"))
    this.items.push(new Item("Majtki"))
    this.items.push(new Item("Ponczochy"))
    this.items.push(new Item("Zegarek"))
    this.items.push(new Item("Szalik"))
    this.items.push(new Item("Koszula"))
    this.items.push(new Item("Apaszka"))
    this.items.push(new Item("Chustka"))
    this.items.push(new Item("Marynarka"))
    this.items.push(new Item("Rekawiczki"))
    this.items.push(new Item("Legginsy"))
  }
}