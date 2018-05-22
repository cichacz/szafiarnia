import Vue from 'vue';
import Vuex from 'vuex';
import ContainerStore from '@/store/ContainerStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    containers: ContainerStore,
  },
});
