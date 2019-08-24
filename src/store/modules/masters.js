import Axios from "axios";

const MASTERS_API = "http://www.fhcp.com/home/index/user";

const state = {
  masters: [],
  rankingInfo: [],
  rankingId: []
};
const getters = {
  masters: state => state.masters,
  rankingInfo: state => state.rankingInfo,
  rankingId: state => state.rankingId
};
const mutations = {
  setMasters: (state, masters) => (state.masters = masters),
  setRankingInfo: (state, rankingInfo) => (state.rankingInfo = rankingInfo),
  setRankingId: (state, rankingId) => {
    state.rankingId = rankingId;
  }

  // filterRankingInfo: (state, personalInfo) => (state.rankingInfo.personalInfo = personalInfo),
};
const actions = {
  async fetchMasters({ commit }) {
    const rs = await Axios.post(MASTERS_API);
    // console.log(rs.data.courses);
    commit("setMasters", rs.data);
  },
  async fetchRankinginfo({ commit }) {
    const rs = await Axios.post(MASTERS_API);
    // console.log(rs.data[0]);
    commit("setRankingInfo", rs.data);
    commit("setRankingId", rs.data);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
