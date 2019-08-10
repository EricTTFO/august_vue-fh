import Vue from "vue";
import Vuex from "vuex";
import Masters from "./modules/masters";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Masters
  }
});
