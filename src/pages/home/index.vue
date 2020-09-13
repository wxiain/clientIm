<template>
  <view class="w100vh w100">
    <view v-if="isLogin">
      <view class="u-page">
        <!-- 所有内容的容器 -->
        <message v-if="current === 0"></message>
        <contact v-else-if="current === 1"></contact>
        <user v-else></user>
      </view>
      <u-tabbar :value="current" @input="handlerCurrent" :list="tabBar" active-color="#2979ff"></u-tabbar>
    </view>
    <view v-else class="w100 h100 flex justify-center align-center">
      <view class="w100">
        <u-button style="width: 70%;" class="u-m-b-20" type="success" @tap="handleRegister">注册</u-button>
        <u-button style="width: 70%;" type="primary" @tap="handleLogin">登录</u-button>
      </view>
    </view>
  </view>
</template>
<script>
import message from "@/pages/messages/index/index";
import user from "@/pages/user/index/index";
import contact from "@/pages/contact/index/index";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      key: 222,
      tabBar: [
        {
          // pagePath: "/pages/messages/index/index",
          iconPath: "/static/tabList/message.png",
          selectedIconPath: "/static/tabList/message-active.png",
          text: "消息",
          count: 100,
        },
        {
          // pagePath: "pages/contact/index/index",
          iconPath: "/static/tabList/contact.png",
          selectedIconPath: "/static/tabList/contact-active.png",
          text: "通讯录",
          count: 1,
        },
        {
          // pagePath: "pages/user/index/index",
          iconPath: "/static/tabList/my.png",
          selectedIconPath: "/static/tabList/my-active.png",
          text: "我的",
        },
      ],
      titleType: {
        0: "消息",
        1: "联系人",
        2: "我的",
      },
    };
  },
  onLoad(opt) {},
  watch: {},
  methods: {
    ...mapMutations(["setCurrent", "removeToken"]),
    ...mapActions(["getUserInfo"]),
    setTitle() {
      uni.setNavigationBarTitle({
        title: this.isLogin ? this.titleType[this.current] : "首页",
      });
    },
    handleRegister() {
      uni.navigateTo({
        url: "/pages/user/register/index",
      });
    },
    handleLogin() {
      uni.navigateTo({
        url: "/pages/user/login/index",
      });
    },
    handlerCurrent(index) {
      this.setCurrent(index);
      this.setTitle();
    },
  },
  computed: {
    ...mapState(["isLogin", "current"]),
  },
  components: {
    message,
    user,
    contact,
  },
  mounted() {
    this.setTitle();
  },
};
</script>
