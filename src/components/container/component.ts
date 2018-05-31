import ItemCardComponent from "@/components/item-card/ItemCard.vue";
import Container, {ContainerType} from "@/models/Container";
import Item, {PackingCategory} from "@/models/Item";
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop, Watch} from "vue-property-decorator";

@Component({
  components: {
    'item-card': ItemCardComponent
  }
})
export default class ContainerComponent extends Vue {
  @Prop()
  id: string;

  container: Container | undefined;
  items: Item[] = [];
  ready: boolean = false;
  busyTimeout: any;

  created() {
    this.$store.watch(this.$store.getters.containers, () => {
      if(!this.container) {
        this.loadContainerData(this.id);
      }
    });

    this.loadContainerData(this.id);
  }

  @Watch('id')
  onIdChange(id: string) {
    clearTimeout(this.busyTimeout);
    this.busyTimeout = setTimeout(() => {
      this.ready = false;
    }, 500);

    this.items = [];
    this.loadContainerData(id);
  }

  loadContainerData(id: string) {
    this.container = this.$store.state.containers.list.find((el: Container) => el.id == id);
    if (this.container) {
      this.$dao.getContainerItems(this.container).then(data => {
        clearTimeout(this.busyTimeout);
        this.ready = true;

        if (data) {
          this.items = data;

          if(this.container && this.container.type == ContainerType.Dirty) {
            this.$store.commit('setDirtyCount', this.items.length);
          }
        }
      });
    }
  }

  removeItem(item: Item) {
    let idx = this.items.findIndex((x: Item) => x.id == item.id);
    this.items.splice(idx, 1);
  }

  changeContainerTo(type: number) {
    const target = this.$store.state.containers.list.find((el: Container) => el.type == type);
    this.items.forEach(item => {
      this.$dao.moveItem(item, target);
    });
    this.$router.push({name: 'panel'});
  }
}