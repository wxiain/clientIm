<template>
  <view>
    <view v-if="isLogin">
      <view class="u-page">
        <!-- 所有内容的容器 -->
        <keep-alive>
          <message v-if="current === 0"></message>
          <contact v-else-if="current === 1"></contact>
          <user v-else></user>
        </keep-alive>
      </view>
      <u-tabbar v-model="current" :list="tabBar" active-color="#2979ff"></u-tabbar>
    </view>
    <view v-else>
      还没有登录
    </view>
  </view>
</template>
<script>
import message from "@/pages/messages/index/index";
import user from "@/pages/user/index/index";
import contact from "@/pages/contact/index/index";
export default {
  data() {
    return {
      key: 222,
      current: 0,
      isLogin: true,
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
  watch: {
    current() {
      this.setTitle();
    },
  },
  methods: {
    setTitle() {
      uni.setNavigationBarTitle({
        title: this.titleType[this.current],
      });
    },
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
