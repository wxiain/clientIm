<template>
  <div class="friendData">
    <detail :id="id">
      <u-cell-item
        title="发消息"
        :arrow="false"
        :center="true"
        :title-style="cellButtonStyle"
        @tap="handleSendMessage"
      ></u-cell-item>
    </detail>
  </div>
</template>

<script>
import detail from "@/pages/contact/widgets/detail";
export default {
  name: "friendData",
  data() {
    return {
      id: "",
      cellButtonStyle: {
        width: "100%",
        padding: 0,
        "text-align": "center",
        "font-size": "34rpx",
      },
    };
  },
  onLoad({ id }) {
    this.id = id;
  },
  methods: {
    handleSendMessage() {
      console.log(9999);
    },
  },
  components: {
    detail,
  },
};
</script>

<style scoped></style>
