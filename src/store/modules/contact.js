import http from "@/util/request";
export default {
  namespaced: true,
  state: {
    userDetail: {},
  },
  actions: {
    getSearching({ commit }, params) {
      return http("/friend/searching", params);
    },
    getContactDetail({ commit }, id) {
      return http("/user/info", { userId: id });
    },
    sendApply({ commit }, params) {
      console.log(params);
      return http("/friend/apply", params, true, "post");
    },
  },
  mutations: {
    setUserDetail(state, data) {
      state.userDetail = data;
    },
  },
};
