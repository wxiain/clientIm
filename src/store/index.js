import Vuex from "vuex";
import Vue from "vue";
import http from "@/util/request";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
  state: {
    userInfo: {},
    token: "",
    isLogin: false,
    current: 0,
  },
  actions: {
    login({ commit }, params) {
      return new Promise((resolve, reject) => {
        http("user/login", params, true, "post")
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
        uni.showLoading({ title: "加载中", mask: true });
        http("user/info", {}, false)
          .then((res) => {
            commit("setUserInfo", res.data);
            commit("setToken", res.token);
            commit("setIsLogin", true);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            uni.hideLoading();
          });
      });
    },
    register({ commit }, params) {
      return new Promise((resolve, reject) => {
        uni.showLoading({ title: "加载中", mask: true });
        http("user/register", params, true, "post")
          .then((res) => {
            commit("setUserInfo", res.data);
            commit("setToken", res.token);
            commit("setIsLogin", true);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            uni.hideLoading();
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
    setCurrent(state, index) {
      state.current = index;
    },
  },
});
