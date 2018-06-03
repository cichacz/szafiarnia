import { ContainerType } from '@/models/Container';

export default {
  state: {
    list: [],
    dirtyCount: 0,
    onTrip: false,
  },
  getters: {
    containers: state => () => state.list,
  },
  mutations: {
    setList(state, list) {
      state.list = list;
    },
    setDirtyCount(state, count) {
      state.dirtyCount = count;
    },
    modifyDirtyCount(state, modifier) {
      state.dirtyCount += modifier;
    },
    setOnTrip(state, status) {
      state.onTrip = status;
    },
  },
  actions: {
    loadContainers({ commit }, dao) {
      dao.getContainers().then((list) => {
        commit('setList', list);

        dao.getContainerItemsCount(list.find(x => x.type === ContainerType.Dirty)).then((count) => {
          commit('setDirtyCount', count);
        });

        dao.getContainerItemsCount(list.find(x => x.type === ContainerType.Trip)).then((count) => {
          if (count) {
            commit('setOnTrip', true);
          }
        });
      });
    },
  },
};
