import Container, {ContainerType} from "@/models/Container";
import Item from "@/models/Item";
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop, Watch} from "vue-property-decorator";

@Component
export default class ContainerComponent extends Vue {
  @Prop()
  id: string;

  items: Item[] = [];
  ready: boolean = false;
  busyTimeout: number;

  mounted() {
    this.loadContainerData(this.id);
  }

  @Watch('id')
  onIdChange(id: string) {
    clearTimeout(this.busyTimeout);
    this.busyTimeout = setTimeout(() => {
      this.ready = false;
    }, 150);

    this.items = [];
    this.loadContainerData(id);
  }

  get isClean() {
    return this.$store.state.containers.list
      .find((el: Container) => el.id == this.id && el.type != ContainerType.Dirty)
  }

  async loadContainerData(id: string) {
    const container = await this.$dao.getContainerById(id);
    if (container) {
      this.$dao.getContainerItems(container).then(data => {
        clearTimeout(this.busyTimeout);
        this.ready = true;

        if (data) {
          this.items = data;
        }
      });
    }
  }

  setAsDirty(item: Item) {
    const container = this.$store.state.containers.list.find((el: Container) => el.type == ContainerType.Dirty);

    if (container) {
      this.changeItemContainer(item, container);
    }
  }

  setAsClean(item: Item) {
    const container = this.$store.state.containers.list.find((el: Container) => el.type == ContainerType.Default);

    if (container) {
      this.changeItemContainer(item, container);
    }
  }

  private changeItemContainer(item: Item, container: Container) {
    this.$dao.moveItem(item, container).then((item: Item) => {
      let idx = this.items.findIndex((x: Item) => x.id == item.id);
      this.items.splice(idx, 1);
      this.$store.commit('modifyDirtyCount', container.type == ContainerType.Dirty ? 1 : -1);
    });
  }
}