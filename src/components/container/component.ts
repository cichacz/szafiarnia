import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop, Watch} from "vue-property-decorator";
import Item from "@/models/Item";
import Container from "@/models/Container";
import {ContainerType} from "@/models/Container";

@Component
export default class ContainerComponent extends Vue {
  @Prop()
  id: string;

  items: Item[] = [];

  mounted() {
    this.loadContainerData(this.id);
  }

  @Watch('id')
  onIdChange(id: string) {
    this.loadContainerData(id);
  }

  async loadContainerData(id: string) {
    const container = await this.$dao.getContainerById(id);
    if(container) {
      this.$dao.getContainerItems(container).then(data => {
        if(data) {
          this.items = data;
        }
      });
    }
  }
}