import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {}
  },
  getters: {
    //computed store버전
    fetchedAsk(state){
      return state.ask;
    },
    fetchedItem(state){
      return state.item;
    }
  },
mutations,
actions
  // getters,
  // mutations,
  // actions
});