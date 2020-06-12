import Vuex from 'vuex';
import Vue from 'vue';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    list: [],
    currentVideo: '',
    searchInfo: {
      searchText: '',
      nextPageToken: '',
    },
    isLoading: false,
  },

  getters: {},

  mutations: {
    setList(state, value) {
      state.list = value;
    },
    addVideos(state, value) {
      state.list = state.list.concat(value);
    },
    chooseVideo(state, value) {
      state.currentVideo = value;
    },
    setSearchInfo(state, value) {
      state.searchInfo = value;
    },
    updateToken(state, nextPageToken) {
      state.searchInfo = { ...state.searchInfo, nextPageToken };
    },
    isLoading(state, value) {
      state.isLoading = value;
    },
  },

  actions: {
    setSearchInfo(context, value) {
      context.commit('setSearchInfo', value);
    },
    chooseVideo(context, value) {
      context.commit('chooseVideo', value);
    },
  },
});
