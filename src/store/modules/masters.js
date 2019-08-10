import Axios from "axios";
import { filter } from "minimatch";

const MASTERS_API =
  "https://hiskio.com/api/v1/courses/professions?type=all&level=all&sort=latest&profession_id=1";

const state = {
  masters: [],
  rankingInfo: []
};
const getters = {
  masters: state => state.masters,
  rankingInfo: state => state.rankingInfo
};
const mutations = {
  setMasters: (state, masters) => (state.masters = masters),
  setRankingInfo: (state, rankingInfo) => (state.rankingInfo = rankingInfo),
  filterRankingInfo: (state, rankingInfo) => (
    state, (rankingInfo = rankingInfo.title)
  )
};
const actions = {
  async fetchMasters({ commit }) {
    const rs = await Axios.get(MASTERS_API);
    // console.log(rs.data.courses);
    commit("setMasters", rs.data.courses);
  },
  async fetchRankinginfo({ commit }) {
    const rs = await Axios.get(MASTERS_API);
    // console.log(rs.data.courses);

    commit("setRankingInfo", rs.data.courses);
  }
  // filter
  // async filterRankingInfo({
  //     commit
  // }) {
  //     const rs = await Axios.get(MASTERS_API);
  //     console.log(rs.data.courses);
  //     commit("setRankingInfo", rs.data.console);
  // }
};

export default {
  state,
  getters,
  mutations,
  actions
};
