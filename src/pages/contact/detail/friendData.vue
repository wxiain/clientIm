<template>
  <div class="friendData">
    <detail :id="id" @data="handlerData">
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
import { mapMutations } from "vuex";
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
        "font-size": "34rpx"
      },
      userDetail: {}
    };
  },
  onLoad({ id }) {
    this.id = id;
  },
  methods: {
    ...mapMutations("message", ["setUserDetail"]),
    handlerData({ userDetail }) {
      this.userDetail = userDetail;
      this.setUserDetail(userDetail);
    },
    handleSendMessage() {
      uni.redirectTo({
        url: `/pages/messages/message/index?id=${this.$store.state.userInfo.id}&receive_id=${this.userDetail.id}`
      });
    }
  },
  components: {
    detail
  }
};
</script>

<style scoped></style>
