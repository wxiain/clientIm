import http from "@/util/request";
export default {
  namespaced: true,
  actions: {
    getSearching({ commit }, params) {
      return http("/friend/searching", params, false);
    },
  },
};
