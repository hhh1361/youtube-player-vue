import Vuex from 'vuex';
import Vue from 'vue';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    list: [],
    currentVideo: '',
  },

  getters: {},

  mutations: {
    setList(state, value) {
      state.list = value;
    },
    chooseVideo(state, value) {
      state.currentVideo = value;
    },
  },

  actions: {
    setList(context, value) {
      context.commit('setList', value);
    },
    chooseVideo(context, value) {
      context.commit('chooseVideo', value);
    },
  },
});
