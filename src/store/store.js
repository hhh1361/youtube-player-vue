import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    list: [],
    currentVideo: '',
  },

  getters: {},

  mutations: {
    setList(state, array) {
      state.list = array;
    },
  },

  actions: {},
});
