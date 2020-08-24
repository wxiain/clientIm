<template>
  <view>
    <!--<u-navbar :is-back="false" title="　" :border-bottom="false">
      <view class="u-flex u-row-right" style="width: 100%;">
        <view class="camera u-flex u-row-center">
          <u-icon name="camera-fill" color="#000000" size="48"></u-icon>
        </view>
      </view>
    </u-navbar>-->
    <view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30 u-p-t-30" @tap="handleData">
      <view class="u-m-r-10" @tap.stop="handleAvatar">
        <u-avatar :src="pic" size="140"></u-avatar>
      </view>
      <view class="u-flex-1">
        <view class="u-font-18 u-p-b-20">晚霞</view>
        <view class="u-font-14 u-tips-color">账号:12000000000</view>
      </view>
      <!--<view class="u-m-l-10 u-p-10">
        <u-icon name="scan" color="#969799" size="28"></u-icon>
      </view>-->
      <view class="u-m-l-10 u-p-10">
        <u-icon name="arrow-right" color="#969799" size="28"></u-icon>
      </view>
    </view>

    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item icon="star" title="收藏"></u-cell-item>
        <!--<u-cell-item icon="photo" title="相册"></u-cell-item>-->
        <!--<u-cell-item icon="coupon" title="卡券"></u-cell-item>-->
        <!--<u-cell-item icon="heart" title="关注"></u-cell-item>-->
      </u-cell-group>
    </view>

    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item icon="setting" title="设置" @tap="handleLogin"></u-cell-item>
      </u-cell-group>
    </view>
  </view>
</template>

<script>
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
        url: "/pages/uCenter/login/index",
      });
    },
    handleAvatar() {
      // 修改头像
      console.log(2);
    },
    handleData() {
      console.log(3);
      // 修改资料
    },
  },
};
</script>

<style lang="scss">
page {
  background-color: #ededed;
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
