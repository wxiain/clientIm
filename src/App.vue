<script>
import { mapActions } from "vuex";
export default {
  onLaunch: function () {
    // 全局只触发一次
    this.getUserInfo();
    // console.log("App Launch");
    // https://cdn.npm.taobao.org/dist/node-sass/v4.14.1/win32-x64-83_binding.node
  },
  onShow: function () {
    // console.log("App Show");
  },
  onHide: function () {
    // console.log("App Hide");
  },
  methods: {
    ...mapActions(["getUserInfo"]),
  },
};
</script>

<style lang="scss">
/*每个页面公共css */
@import "../node_modules/uview-ui/index.scss";
@import "./App";
</style>
