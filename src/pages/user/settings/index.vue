<template>
  <view class="page">
    <view class="u-m-t-20">
      <u-cell-group class="u-m-b-20">
        <u-cell-item title="聊天" :center="true" :title-style="cellStyle"></u-cell-item>
      </u-cell-group>
      <u-cell-group class="u-m-b-20">
        <u-cell-item title="反馈" :center="true" :title-style="cellStyle"></u-cell-item>
        <u-cell-item title="关于我们" :center="true" :title-style="cellStyle"></u-cell-item>
        <!--<u-cell-item title="修改资料" :center="true" :title-style="{ fontSize: '38rpx' }"></u-cell-item>-->
      </u-cell-group>
      <u-cell-group class="u-m-b-20">
        <u-cell-item title="修改密码" :center="true" :title-style="cellStyle"></u-cell-item>
        <!--<u-cell-item title="修改资料" :center="true" :title-style="{ fontSize: '38rpx' }"></u-cell-item>-->
      </u-cell-group>
      <u-cell-group class="u-m-b-20">
        <u-cell-item title="切换账户" :arrow="false" :center="true" :title-style="cellButtonStyle"></u-cell-item>
      </u-cell-group>
      <u-cell-group>
        <u-cell-item
          title="退出"
          :arrow="false"
          :center="true"
          :title-style="cellButtonStyle"
          @tap="handleLogout"
        ></u-cell-item>
      </u-cell-group>
      <!--<u-cell-group class="u-m-t-20">
        <u-cell-item title="退出" :arrow="false" :center="true" :title-style="cellGroupStyle"></u-cell-item>
      </u-cell-group>-->
    </view>
    <u-modal
      v-model="show"
      :content="content"
      :mask-close-able="true"
      :title="title"
      :show-cancel-button="true"
      @confirm="handleEvent"
      @cancel="shwo = false"
    ></u-modal>
  </view>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      customStyle: {
        marginTop: "20px", // 注意驼峰命名，并且值必须用引号包括，因为这是对象
        color: "red",
      },
      cellStyle: {
        fontSize: "34rpx",
      },
      cellButtonStyle: {
        width: "100%",
        padding: 0,
        "text-align": "center",
        "font-size": "34rpx",
      },
      content: "",
      show: false,
      title: "",
      handleEvent: () => {},
    };
  },
  methods: {
    ...mapActions(["logout"]),
    handleLogout() {
      this.show = true;
      this.title = "退出";
      this.content = "确认退出登录?";
      this.handleEvent = () => {
        this.logout(() => {
          uni.reLaunch({
            url: "/pages/home/index",
          });
        });
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
