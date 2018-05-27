import Container, {ContainerType} from '@/models/Container'
import Vue from 'vue'
import Component from 'vue-class-component'
import {Watch} from "vue-property-decorator";
import 'vue-router'

@Component
export default class DashboardComponent extends Vue {
  get containers(): Container[] {
    return this.$store.state.containers.list;
  }

  get dirtyCount() {
    return this.$store.state.containers.dirtyCount;
  }

  @Watch('containers')
  onContainersChange(containers: Container[]) {
    //preselect default container
    let defaultContainer = containers.filter((el: Container) => el.type == ContainerType.Default);
    if(defaultContainer.length && this.$route.name == 'panel') {
      this.$router.replace(this.getUrl(defaultContainer.pop()!))
    }
  }

  async created() {
    this.$store.dispatch('loadContainers', this.$dao);
  }

  showBadge(container: Container) {
    switch(container.type) {
      case ContainerType.Dirty:
        return this.dirtyCount;
      default:
        return false;
    }
  }

  logout() {
    this.$dao.logout().then(() => {
      this.$router.replace({name: 'login'});
    });
  }

  isActive(container: Container) {
    return this.$route.name == 'container' && this.$route.params['id'] == container.id;
  }

  getUrl(container: Container) {
    return { name: 'container', params: { id: container.id! }}
  }
}