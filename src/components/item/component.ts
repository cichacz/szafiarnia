import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import Item from "@/models/Item";
import {ColourGroup, LaundryCategory, PackingCategory} from '@/models/Item';

@Component
export default class ItemComponent extends Vue {
  @Prop()
  item: Item;

  get formTitle() {
    return this.currentItem.name.length ? this.currentItem.name : 'Dodaj nowy przedmiot';
  }

  public currentItem: Item = this.item || new Item('');
  public error: string = '';

  public colorGroup = ColourGroup;
  public laundryCategory = LaundryCategory;
  public packingCategory = PackingCategory;

  addItem() {
    console.log(this.currentItem);
  }

  cancel() {
    this.$router.go(-1);
  }
}