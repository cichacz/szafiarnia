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
import ItemCardComponent from "@/components/item-card/ItemCard.vue";
import * as Ladda from 'ladda';
import {LaddaButton} from "ladda";

@Component({
  components: {
    'item-card': ItemCardComponent
  }
})
export default class PackingComponent extends Vue {

  container: Container | undefined;
  items: Item[] = [];
  packed: Item[] = [];
  hasStarted: boolean = false;
  tripLength: number = 0;
  tabIndex: number = 0;

  underwearAndSocks = [PackingCategory.Underwear, PackingCategory.Socks];
  normalClothes = [PackingCategory.Shirts, PackingCategory.Trousers, PackingCategory.Skirts];
  outsideClothes = [PackingCategory.Jacket];
  shoesAndOthers = [PackingCategory.Shoes, PackingCategory.Accessories, PackingCategory.Other];

  created() {
    this.loadContainerData();
  }

  loadContainerData() {
    this.container = this.$store.state.containers.list.find((el: Container) => el.type == ContainerType.Default);
    if (this.container) {
      this.$dao.getContainerItems(this.container).then((data: Item[]) => {
        this.items = data;
      });
    }
  }

  @Watch('tabIndex')
  onTabIndexChange(val: number) {
    if(val === 0) {
      this.hasStarted = false;
    }
  }

  startPacking() {
    this.$validator.validateAll().then((result: any) => {
      if(result) {
        this.chooseDefault();
        this.hasStarted = true;
        this.$nextTick(() => {
          this.tabIndex++;
        });
      }
    }).catch(() => {
      return false
    });
  }

  chooseDefault() {
    this.packed = [];

    for (const packingCategory in PackingCategory) {
        if(Number(packingCategory) || Number(packingCategory) == 0) {
          const filtered = this.items.filter(item => {
            return String(item.packingCategory != null ? item.packingCategory : null) == packingCategory;
          });
          const multiplier = this.getMultiplier(packingCategory);
          const numberToPack = this.calculateDefaultQuantity(multiplier);
          for (let i = 0; i < (numberToPack > filtered.length ? filtered.length : numberToPack); i++) {
            this.packed.push(filtered[i]);
            // this.items.splice(this.items.indexOf(filtered[i]),1);
          }
        }
    }
  }

  isPacked(item: Item) {
    return ~this.packed.indexOf(item);
  }

  toggleItem(item: Item) {
    let index = this.packed.indexOf(item);
    if(index < 0) {
      this.packed.push(item);
    } else {
      this.packed.splice(index, 1);
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
    return 0;
  }

  async finishPacking() {
    let l: LaddaButton | null = null;
    const btn = this.$refs.saveBtn;
    if(btn instanceof HTMLButtonElement) {
      l = Ladda.create(btn);
      l.start();
    }

    const travelContainer = this.$store.state.containers.list.find((el: Container) => el.type == 2);
    await Promise.all(this.packed.map(item => {
      return this.$dao.moveItem(item, travelContainer);
    }));

    if(l) {
      l.stop();
    }

    this.$store.commit('setOnTrip', this.packed.length > 0);
    this.$router.push({name: 'container', params: {id: travelContainer.id}});
  }

  cancelPacking() {
    const defaultContainer = this.$store.state.containers.list.find((el: Container) => el.type == ContainerType.Default);
    this.$router.push({name: 'container', params: {id: defaultContainer.id}});
  }
}