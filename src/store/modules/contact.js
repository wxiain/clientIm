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
      return http("/friend/apply", params, true, "post");
    },
    getApplyList({ commit }) {
      return http("/friend/apply/list", {}, true);
    },
    sendAgree({ commit }, { id, data }) {
      return http("/friend/apply/agree/" + id, data, true, "put");
    },
    getContactList({ commit }, params) {
      return http("/friend/myList", params, true);
    },
  },
  mutations: {
    setUserDetail(state, data) {
      state.userDetail = data;
    },
  },
};
