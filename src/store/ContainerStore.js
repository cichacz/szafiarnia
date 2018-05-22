import {ContainerType} from '@/models/Container';

export default {
  state: {
    list: [],
    dirtyCount: 0,
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
  },
  actions: {
    loadContainers({ commit }, dao) {
      dao.getContainers().then((list) => {
        commit('setList', list);

        dao.getContainerItemsCount(list.find(x => x.type === ContainerType.Dirty)).then((count) => {
          commit('setDirtyCount', count);
        });
      });
    },
  },
};
