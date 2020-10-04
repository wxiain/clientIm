<template>
  <view>
    <detail :id="id" @data="handleData">
      <u-cell-item
        title="添加"
        :arrow="false"
        :center="true"
        :title-style="cellButtonStyle"
        @tap="handleAdd"
      ></u-cell-item>
    </detail>
  </view>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import detail from "@/pages/contact/widgets/detail";
export default {
  name: "contact-index",
  data() {
    return {
      id: "",
      pic: this.$store.state.defaultAvatar,
      userDetail: {},
      userData: {},
      cellButtonStyle: {
        width: "100%",
        padding: 0,
        "text-align": "center",
        "font-size": "34rpx",
      },
    };
  },
  onLoad({ id, type = "" }) {
    this.id = id;
  },
  onUnLoad() {
    this.setUserDetail({});
  },
  methods: {
    ...mapActions("contact", ["getContactDetail", "sendAgree"]),
    ...mapMutations("contact", ["setUserDetail"]),
    handleData({ userDetail, userData }) {
      this.userData = userData;
      this.userDetail = userDetail;
      this.setUserDetail(userData);
    },
    handleAdd() {
      uni.navigateTo({
        url: "/pages/contact/detail/confirm?id=" + this.id,
      });
    },
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  components: {
    detail,
  },
};
</script>

<style scoped></style>
