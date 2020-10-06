export default {
  namespaced: true,
  state: {},
  actions: {
    socketInit({ commit, state }) {
      let token = uni.getStorageSync(process.env.VUE_APP_TOKEN_KEY);
      uni.connectSocket({
        url: process.env.VUE_APP_SOCKET_URL,
        protocols: [token],
        complete: () => {}
      });
      uni.onSocketOpen(function (res) {
        uni.onSocketMessage(({ data }) => {
          console.log(JSON.parse(data));
        });
      });
    }
  }
};
