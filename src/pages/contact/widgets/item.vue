<template>
  <view class="u-m-b-20 bg-white u-flex u-p-l-20 u-p-r-20 u-p-b-20 u-p-t-20">
    <u-avatar :src="$store.state.defaultAvatar" size="100"></u-avatar>
    <view class="u-m-l-20 border-bottom flex-sub" style="height: 100rpx;">
      <view class="u-m-t-12">{{ bean.nickName || bean.username || "" }}</view>
      <view>{{ bean.gender || "保密" }}</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "contact-item",
  props: {
    bean: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
