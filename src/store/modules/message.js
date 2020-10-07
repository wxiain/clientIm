export default {
  namespaced: true,
  state: {
    userDetail: {}
  },
  mutations: {
    setUserDetail(state, data) {
      state.userDetail = data;
    }
  }
};
