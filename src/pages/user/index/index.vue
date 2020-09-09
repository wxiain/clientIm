<template>
  <view>
    <!--<u-navbar :is-back="false" title="　" :border-bottom="false">
      <view class="u-flex u-row-right" style="width: 100%;">
        <view class="camera u-flex u-row-center">
          <u-icon name="camera-fill" color="#000000" size="48"></u-icon>
        </view>
      </view>
    </u-navbar>-->
    <view class="u-flex u-col-bottom user-box u-p-l-30 u-p-r-20 u-p-b-30 u-p-t-30" @tap="handleData">
      <view class="u-m-r-10" @tap.stop="handleAvatar">
        <u-avatar :src="pic" size="120"></u-avatar>
      </view>
      <view class="u-flex-1">
        <view class="u-font-18 u-p-b-10">{{ userInfo.nickname || "点击设置昵称" }}</view>
        <view class="u-font-14 u-tips-color u-flex u-p-b-15">
          <view class="u-flex-1">用户名:{{ userInfo.username }}</view>
          <view class="u-m-l-10">
            <u-icon name="arrow-right" color="#969799" size="28"></u-icon>
          </view>
        </view>
      </view>
      <!--<view class="u-m-l-10 u-p-10">
        <u-icon name="scan" color="#969799" size="28"></u-icon>
      </view>-->
    </view>

    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item icon="star" title="收藏" :icon-size="44" :title-style="{ fontSize: '34rpx' }"></u-cell-item>
        <!--<u-cell-item icon="photo" title="相册"></u-cell-item>-->
        <!--<u-cell-item icon="coupon" title="卡券"></u-cell-item>-->
        <!--<u-cell-item icon="heart" title="关注"></u-cell-item>-->
      </u-cell-group>
    </view>

    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item
          icon="setting"
          title="设置"
          :icon-size="44"
          :title-style="{ fontSize: '34' }"
          @tap="handleLogin"
        ></u-cell-item>
      </u-cell-group>
    </view>
  </view>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      pic: "http://chitchat.wxiain.com/images/defaultAvatar.jpg",
      show: true,
    };
  },
  onLoad() {},
  methods: {
    handleLogin() {
      wx.navigateTo({
        url: "/pages/user/settings/index",
      });
    },
    handleAvatar() {
      // 修改头像
      console.log(2);
    },
    handleData() {
      // 修改资料
      uni.navigateTo({
        url: "/pages/user/userData/index",
      });
    },
  },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>

<style lang="scss">
page {
  background-color: $uni-bg-color;
}

.camera {
  width: 54px;
  height: 44px;

  &:active {
    background-color: #ededed;
  }
}
.user-box {
  background-color: #fff;
}
</style>
