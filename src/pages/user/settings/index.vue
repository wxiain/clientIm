<template>
  <view>
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
        <u-cell-item title="退出" :arrow="false" :center="true" :title-style="cellButtonStyle"></u-cell-item>
      </u-cell-group>
      <!--<u-cell-group class="u-m-t-20">
        <u-cell-item title="退出" :arrow="false" :center="true" :title-style="cellGroupStyle"></u-cell-item>
      </u-cell-group>-->
    </view>
  </view>
</template>

<script>
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
    };
  },
};
</script>

<style lang="scss" scoped>
page {
  background: $uni-bg-color;
}
</style>
