import Container, {ContainerType} from "@/models/Container";
import Item, {ColourGroup, LaundryCategory, PackingCategory} from "@/models/Item";
import swal from 'sweetalert';
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from "vue-property-decorator";

@Component
export default class ItemCardComponent extends Vue {
  @Prop()
  item: Item;

  @Prop()
  container: Container;

  @Prop()
  packing: boolean;

  @Prop()
  picked: boolean;

  busy: boolean = false;

  get isClean() {
    return this.container && this.container.type != ContainerType.Dirty;
  }

  categoryDisplay() {
    let items = [];
    if(this.item.packingCategory) {
      items.push(this.$t('PackingCategory.' + PackingCategory[this.item.packingCategory]));
    }
    if(this.item.subcategory) {
      items.push(this.item.subcategory);
    }

    return items.join(' &bull; ');
  }


  setAsDirty() {
    const container = this.$store.state.containers.list.find((el: Container) => el.type == ContainerType.Dirty);

    if (container) {
      this.changeItemContainer(container);
    }
  }

  setAsClean() {
    const container = this.$store.state.containers.list.find((el: Container) => el.type == ContainerType.Default);

    if (container) {
      this.changeItemContainer(container);
    }
  }

  toggleItem() {
    this.$emit('item-toggle', this.item);
  }

  deleteItem() {
    swal({
      title: "Jesteś pewien?",
      text: "Na pewno chcesz usunąć ten przedmiot?",
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: true,
        confirm: true,
      },
    })
      .then((willDelete: boolean) => {
        if (willDelete) {
          this.busy = true;
          this.$dao.deleteItem(this.item).then(() => {
            this.$emit('item-remove', this.item);
            this.busy = false;
            swal("Zrobione!", "Przedmiot został usunięty!", "success");
          });
        }
      });
  }

  private changeItemContainer(container: Container) {
    this.busy = true;
    this.$dao.moveItem(this.item, container).then((item: Item) => {
      this.busy = false;
      this.$emit('item-remove', item);
      this.$store.commit('modifyDirtyCount', container.type == ContainerType.Dirty ? 1 : -1);
    });
  }
}