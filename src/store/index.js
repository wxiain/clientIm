import Vuex from "vuex";
import Vue from "vue";
import http from "@/util/request";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {
    userInfo: {},
    token: "",
    isLogin: false,
  },
  actions: {
    login({ commit }, params) {
      return new Promise((resolve, reject) => {
        http("user/login", params, "post")
          .then((res) => {
            commit("setUserInfo", res.data);
            commit("setToken", res.token);
            commit("setIsLogin", true);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        http("user/info")
          .then((res) => {
            commit("setUserInfo", res.data);
            commit("setToken", res.token);
            commit("setIsLogin", true);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data;
    },
    setToken(state, token) {
      state.token = token;
      uni.setStorage({ key: "apiToken", data: token });
    },
    setIsLogin(state, boolean) {
      state.isLogin = boolean;
    },
  },
});
