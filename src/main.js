import Vue from "vue";
import App from "./App";
import uView from "uview-ui";

import request from "@/util/request";

Vue.config.productionTip = false;

Vue.prototype.$http = request;

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
