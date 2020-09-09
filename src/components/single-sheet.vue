<template>
  <view class="w100">
    <u-input :size="size" :value="value" type="select" :placeholder="placeholder" @click="show = true"></u-input>
    <u-action-sheet
      :list="list"
      v-model="show"
      @click="handleChange"
      :cancel-btn="cancelBtn"
      :tips="tips"
      @close="$emit('close')"
      :z-index="zIndex"
      :border-radius="borderRadius"
    ></u-action-sheet>
  </view>
</template>

<script>
export default {
  name: "single-sheet",
  data() {
    return {
      show: false,
    };
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    size: {
      type: String,
      default: "mini",
    },
    placeholder: {
      type: String,
      default: "请选择",
    },
    /*
     * 顶部圆角
     * */
    borderRadius: {
      type: Number,
      default: 5,
    },
    /*层级
     *
     * */
    zIndex: {
      type: Number,
      default: 1075,
    },
    /*
     * 顶部文字提示
     * */
    tips: {
      type: Object,
      default: () => ({}),
    },
    /*
     * 底部的取消按钮
     * */
    cancelBtn: {
      type: Boolean,
      default: true,
    },
    valueKey: {
      type: String,
      default: "text",
    },
    value: {
      type: [Object, String, Number],
    },
  },
  methods: {
    handleChange(index) {
      let item = this.list[index];
      let value = this.$methods.typeof(item) === "object" ? item[this.valueKey] : item;
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped></style>
