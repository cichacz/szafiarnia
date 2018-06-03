import ItemCardComponent from "@/components/item-card/ItemCard.vue";
import Container, {ContainerType} from "@/models/Container";
import Item, {PackingCategory} from "@/models/Item";
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop, Watch} from "vue-property-decorator";
import * as Ladda from 'ladda';
import {LaddaButton} from "ladda";

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
  showActions: boolean = false;
  busyTimeout: any;

  containerType = ContainerType;

  created() {
    this.$store.watch(this.$store.getters.containers, () => {
      if(!this.container) {
        this.loadContainerData(this.id);
      }
    });

    this.loadContainerData(this.id);
  }

  get onTrip() {
    return this.$store.state.containers.onTrip;
  }

  @Watch('id')
  onIdChange(id: string) {
    clearTimeout(this.busyTimeout);
    this.busyTimeout = setTimeout(() => {
      this.ready = false;
    }, 400);

    this.showActions = false;
    this.items = [];
    this.loadContainerData(id);
  }

  loadContainerData(id: string) {
    this.container = this.$store.state.containers.list.find((el: Container) => el.id == id);
    if (this.container) {
      this.$dao.getContainerItems(this.container).then(data => {
        clearTimeout(this.busyTimeout);
        this.ready = true;
        this.showActions = true;

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

    if(this.container && this.container.type == ContainerType.Dirty) {
      this.$store.commit('modifyDirtyCount', -1);
    }
  }

  async changeContainerTo(type: ContainerType) {
    let l: LaddaButton | null = null;
    const btn = this.$refs.changeBtn;
    if(btn instanceof HTMLButtonElement) {
      l = Ladda.create(btn);
      l.start();
    }

    const target = this.$store.state.containers.list.find((el: Container) => el.type == type);
    const itemCount = this.items.length;
    await Promise.all(this.items.map(item => {
      return this.$dao.moveItem(item, target);
    }));

    //przenosimy z/do pralki
    if(this.container && this.container.type == ContainerType.Dirty && type != ContainerType.Dirty) {
      this.$store.commit('modifyDirtyCount', -itemCount);
    } else if(this.container && this.container.type != ContainerType.Dirty && type == ContainerType.Dirty) {
      this.$store.commit('modifyDirtyCount', itemCount);
    }

    //rozpakowujemy się
    if(this.container && this.container.type == ContainerType.Trip && type == ContainerType.Dirty) {
      this.$store.commit('setOnTrip', false);
    }

    if(l) {
      l.stop();
    }

    this.$router.push({name: 'panel'});
  }
}