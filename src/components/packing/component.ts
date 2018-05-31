import Container, {ContainerType} from "@/models/Container";
import Item, {ColourGroup, LaundryCategory, PackingCategory} from "@/models/Item";
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Component from 'vue-class-component'
require('vue-multiselect');
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {Prop, Watch} from "vue-property-decorator";

@Component
export default class PackingComponent extends Vue {
  
  container: Container | undefined;
  items: Item[] = [];
  packed: Item[] = [];
  ready: boolean = false;
  busyTimeout: any;
  tripLength: number = 0;

  underwearAndSocks = [PackingCategory.Underwear, PackingCategory.Socks];
  normalClothes = [PackingCategory.Shirts, PackingCategory.Trousers, PackingCategory.Skirts];
  outsideClothes = [PackingCategory.Jacket];
  shoesAndOthers = [PackingCategory.Shoes, PackingCategory.Accessories, PackingCategory.Other];

  created() {
    this.loadContainerData();
  }

  @Watch('tripLength')
  onTripLengthChange(tripLength: number) {
    this.chooseDefault();
  }

  loadContainerData() {
    this.container = this.$store.state.containers.list.find((el: Container) => el.type == 0);
    if (this.container) {
      this.$dao.getContainerItems(this.container).then(data => {
        clearTimeout(this.busyTimeout);
        this.ready = true;
        if (data) {
          this.items = data;
          this.chooseDefault;
          if(this.container && this.container.type == ContainerType.Dirty) {
            this.$store.commit('setDirtyCount', this.items.length);
          }
        }
      });
    }
  }

  chooseDefault() {
    this.packed.length = 0;
    for (const packingCategory in PackingCategory) {
        if(Number(packingCategory) || Number(packingCategory) == 0) {
          const filtered = this.items.filter(item => {
            return String(item.packingCategory != null ? item.packingCategory : null) == packingCategory;
          })
          const multiplier = this.getMultiplier(packingCategory);
          const numberToPack = this.calculateDefaultQuantity(multiplier);
          var i;
          for (i = 0; i < (numberToPack > filtered.length ? filtered.length : numberToPack); i++) { 
            this.packed.push(filtered[i]);
            this.items.splice(this.items.indexOf(filtered[i]),1);
          } 
        }
    }
  }

  calculateDefaultQuantity(multiplier: number) {
    return Math.ceil(this.tripLength * multiplier);
  }

  filterByCategories(categories: any, array: Item[]) {
    return array.filter((x: Item) => {
      return categories.includes(x.packingCategory)
    });
  }

  getMultiplier(category: any) {
    if(category == PackingCategory.Underwear 
      || category == PackingCategory.Socks
      || category == PackingCategory.Shirts) {
        return 1.2;
    }
    if(category == PackingCategory.Trousers
      || category == PackingCategory.Skirts) {
        return 0.4;
    }
    if(category == PackingCategory.Shoes
      || category == PackingCategory.Jacket) {
        return 0.1;
    }
    if(category == PackingCategory.Accessories
        || category == PackingCategory.Other) {
          return 0;
    }
    return 0;
  }

  finishPacking() {
    const travelContainer = this.$store.state.containers.list.find((el: Container) => el.type == 2);
    this.packed.forEach(item => {
      this.$dao.moveItem(item, travelContainer);
    })
    this.$router.push({name: 'panel'});
  }
}