import http from "@/util/request";
export default {
  namespaced: true,
  actions: {
    changeUserInfo({ commit }, data) {
      return http("user/set", data, false, "put");
    },
  },
};
