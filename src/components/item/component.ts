import Item, {ColourGroup, LaundryCategory, PackingCategory} from "@/models/Item";
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";
import Container, {ContainerType} from "../../models/Container";

@Component
export default class ItemComponent extends Vue {
  @Prop()
  id: string;

  @Prop()
  saved: string;

  get formTitle() {
    return this.currentItem.name.length ? this.currentItem.name : 'Dodaj nowy przedmiot';
  }

  /** @todo pobieranie z bazy **/
  public currentItem: Item = new Item('');
  public error: string = '';

  public colorGroup = ColourGroup;
  public laundryCategory = LaundryCategory;
  public packingCategory = PackingCategory;

  addItem() {
    if(!this.currentItem.idContainer) {
      let defaultContainer = this.$store.state.containers.list.find((el: Container) => el.type == ContainerType.Default);
      if(defaultContainer) {
        this.currentItem.idContainer = defaultContainer.id;
      }
    }

    this.$dao.saveItem(this.currentItem).then((doc) => {
      if(doc) {
        this.$router.push({name: 'item', params: {id: doc.id, saved: "1"}});
      }
    });
  }

  cancel() {
    this.$router.go(-1);
  }
}