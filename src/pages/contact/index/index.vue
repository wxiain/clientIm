<template>
  <view class="page w100 w100vh u-p-t-20">
    <view class="u-m-b-20">
      <u-cell-group :border="false">
        <u-cell-item title="新的朋友" :title-style="{ fontSize: '34rpx' }" @tap="handleSearching"></u-cell-item>
        <u-cell-item
          title="好友申请"
          :title-style="{ fontSize: '34rpx' }"
          :border-bottom="false"
          @tap="handleApply"
        ></u-cell-item>
        <!--<u-cell-item icon="photo" title="相册"></u-cell-item>-->
        <!--<u-cell-item icon="coupon" title="卡券"></u-cell-item>-->
        <!--<u-cell-item icon="heart" title="关注"></u-cell-item>-->
      </u-cell-group>
    </view>
    <view>
      <!--<u-cell-group :border="false">
        <u-cell-item title="新的朋友" :title-style="{ fontSize: '34rpx' }" :border-bottom="false"></u-cell-item>
        <u-cell-item icon="photo" title="相册"></u-cell-item>
        <u-cell-item icon="coupon" title="卡券"></u-cell-item>
        <u-cell-item icon="heart" title="关注"></u-cell-item>
      </u-cell-group>-->
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    handleSearching() {
      uni.navigateTo({
        url: "/pages/contact/searching/index",
      });
    },
    handleApply() {
      uni.navigateTo({
        url: "/pages/contact/applyList/index",
      });
    },
  },
};
</script>
