import Vue from 'vue'
import Component from 'vue-class-component'
import * as firebase from 'firebase'
import 'vue-router'
import Container from '@/models/Container'
import {ContainerType} from '@/models/Container';

@Component
export default class DashboardComponent extends Vue {

  containers: Container[] = [];

  async created() {
    this.containers = await this.$dao.getContainers();

    //preselect default container
    let defaultContainer = this.containers.filter((el: Container) => el.type == ContainerType.Default);
    if(
      defaultContainer.length
      && this.$route.name != 'container'
      && this.$route.name != 'item'
      && this.$route.name != 'item-add'
    ) {
      this.$router.replace(this.getUrl(defaultContainer.pop()!))
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

  get defaultContainer() {
    let defaultContainer = this.containers.filter((el: Container) => el.type == ContainerType.Default);
    if(defaultContainer.length) {
      return defaultContainer.pop()!.id;
    }

    return null;
  }
}