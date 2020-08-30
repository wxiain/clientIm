import Vue from "vue";
import App from "./App";
import uView from "uview-ui";

Vue.config.productionTip = false;

App.mpType = "app";

Vue.use(uView);
// #ifndef MP-WEIXIN
import "./uView";
// #endif
// import uButton from "uView-ui/components/u-button/u-button.vue";

const app = new Vue({
  ...App,
});
app.$mount();
