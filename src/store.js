import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const MASTERS_API =
  "https://hiskio.com/api/v1/courses/professions?type=all&level=all&sort=latest&profession_id=1";
const RANKING_API =
  "https://hiskio.com/api/v1/courses/professions?type=all&level=all&sort=latest&profession_id=1";
// const MASTERS_API ="https://jsonplaceholder.typicode.com/posts";
export default new Vuex.Store({
  state: {
    masters: [],
    rankingInfo: []
  },
  mutations: {
    setMasters(state, masters) {
      state.masters = masters;
    },
    setRankingInfo(state, rankingInfo) {
      state.rankingInfo = rankingInfo;
    }
  },
  actions: {
    fetchMasters({ commit }) {
      fetch(MASTERS_API)
        .then(rs => rs.json())
        .then(rs => {
          // console.log(rs)
          commit("setMasters", rs.courses);
        });
    },
    fetchRankinginfo({ commit }) {
      fetch(RANKING_API)
        .then(rs => rs.json())
        .then(rs => {
          // console.log(rs)
          commit("setRankingInfo", rs.courses);
        });
    }
  }
});
