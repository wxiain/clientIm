<template>
  <view style="position: fixed; left: 0; bottom: 0;" class="u-p-20 w100">
    <u-button
      @click="$emit('save')"
      :loading="loading"
      :plain="plain"
      :shape="shape"
      :size="size"
      :ripple="ripple"
      :hairLine="hairLine"
      :type="type"
      >{{ dataName }}</u-button
    >
  </view>
</template>

<script>
export default {
  name: "save",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
    },
    type: {
      type: String,
      default: "primary",
    },
    dataName: {
      type: String,
      default: "保存",
    },
    /*
     * 外观形状
     * */
    shape: {
      type: String,
      default: "square",
    },
    /*
     * 细边框
     * */
    hairLine: {
      type: Boolean,
      default: false,
    },
    /*
     * 镂空
     * */
    plain: {
      type: Boolean,
      default: false,
    },
    /*
     *点击水波纹
     * */
    ripple: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped></style>
