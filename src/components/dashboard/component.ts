import Container, {ContainerType} from '@/models/Container'
import Vue from 'vue'
import Component from 'vue-class-component'
import {Watch} from "vue-property-decorator";
import {Route} from 'vue-router'

@Component
export default class DashboardComponent extends Vue {
  get containers(): Container[] {
    const containers = this.$store.state.containers.list;
    if(this.onTrip) {
      return containers;
    }

    return containers.filter((el: Container) => el.type != ContainerType.Trip);
  }

  get dirtyCount() {
    return this.$store.state.containers.dirtyCount;
  }

  get onTrip() {
    return this.$store.state.containers.onTrip;
  }

  @Watch('containers')
  onContainersChange(containers: Container[]) {
    //preselect default container
    this.showDefaultContianer(containers);
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

  beforeRouteUpdate(to: Route, from: Route, next: Function) {
    if(to.name === 'panel') {
      let defaultContainer = this.containers.filter((el: Container) => el.type == ContainerType.Default);
      next(this.getUrl(defaultContainer.pop()!));
      return;
    }
    next();
  }

  showDefaultContianer(containers: Container[]) {
    let defaultContainer = containers.filter((el: Container) => el.type == ContainerType.Default);
    if(defaultContainer.length && this.$route.name == 'panel') {
      this.$router.replace(this.getUrl(defaultContainer.pop()!));
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