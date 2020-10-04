<template>
  <view class="processApply">
    <detail :id="id" @data="handleData">
      <u-cell-item
        name="operation"
        title="同意"
        :arrow="false"
        :center="true"
        :title-style="cellButtonStyle"
        @tap="handleAdd"
      ></u-cell-item>
    </detail>
    <u-modal
      v-model="show"
      :content="content"
      :mask-close-able="true"
      :title="title"
      :show-cancel-button="true"
      cancel-text="拒绝"
      @confirm="handleEvent"
      @cancel="handleCancel"
    ></u-modal>
  </view>
</template>

<script>
import detail from "@/pages/contact/widgets/detail";
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "processApply",
  data() {
    return {
      content: "",
      show: false,
      title: "",
      id: "",
      cellButtonStyle: {
        width: "100%",
        padding: 0,
        "text-align": "center",
        "font-size": "34rpx",
      },
      userDetail: {},
      userData: {},
    };
  },
  onLoad({ id }) {
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
    handleEvent(status = "agreement") {
      uni.showLoading({
        title: "加载中...",
        mask: false,
      });
      let keys = ["nickname", "address", "username", "gender", "age", "avatar", "email", "id"];
      let userDetail = this.userDetail;
      let userInfo = this.$store.state.userInfo;
      let user = {};
      let apply = {};
      for (let item of keys) {
        user[item] = userInfo[item];
        apply[item] = userDetail[item];
      }
      this.sendAgree({ id: this.id, data: { status, apply, user, relation_id: userDetail.id, apply_id: userInfo.id } })
        .then((res) => {
          uni.showToast({
            title: res.message,
            mask: true,
          });
          setTimeout(() => {
            uni.navigateBack();
          }, 1500);
        })
        .catch((err) => {
          uni.showToast({
            title: err.message,
            icon: "none",
          });
        })
        .finally(() => {
          uni.hideLoading();
        });
    },
    handleCancel() {
      this.handleEvent("reject");
    },
    handleAdd() {
      this.show = true;
      this.content = "确定同意" + this.userDetail.username + "的申请";
    },
  },
  components: {
    detail,
  },
};
</script>

<style scoped></style>
