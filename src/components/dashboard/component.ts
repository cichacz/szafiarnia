import Vue from 'vue'
import Component from 'vue-class-component'
import Container from "@/models/Container"
import {ContainerType} from "@/models/Container";

@Component
export default class DashboardComponent extends Vue {

  containers: Container[] = [
    new Container('Szafa'),
    new Container('Pralka', ContainerType.Dirty),
    new Container('Wyjazd', ContainerType.Trip)
  ];

  mounted() {
    //preselect default container
    let defaultContainer = this.containers.filter((el: Container) => el.type == ContainerType.Default);
    if(defaultContainer.length) {
      this.$router.replace(this.getUrl(defaultContainer.pop()!))
    }
  }

  isActive(container: Container) {
    return this.$route.name == 'container' && this.$route.params['type'] == ContainerType[container.type];
  }

  getUrl(container: Container) {
    return { name: 'container', params: { type: ContainerType[container.type] }}
  }
}