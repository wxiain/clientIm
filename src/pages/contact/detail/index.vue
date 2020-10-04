<template>
  <view class="page w100vh w100">
    <view class="u-flex u-col-bottom user-box u-p-l-30 u-p-r-20 u-p-b-20 u-p-t-30 bg-white">
      <view class="u-m-r-10">
        <u-avatar :src="pic" size="120"></u-avatar>
      </view>
      <view class="u-flex-1">
        <view class="u-font-18 u-p-b-10">{{ userDetail.nickname || userDetail.username }}</view>
        <view class="u-font-14 u-tips-color u-flex u-p-b-15">
          <view class="u-flex-1">手机:{{ userDetail.mobile }}</view>
        </view>
      </view>
      <!--<view class="u-m-l-10 u-p-10">
        <u-icon name="scan" color="#969799" size="28"></u-icon>
      </view>-->
    </view>
    <!-- <u-line color="info" />-->
    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item
          title="个性签名"
          :arrow="false"
          :icon-size="44"
          :title-style="{ fontSize: '34rpx' }"
          :value-style="{ textAlign: 'left', marginLeft: '20rpx', fontSize: '26rpx' }"
        >
          <text>还未开放</text>
        </u-cell-item>
        <u-cell-item
          title="来源"
          :arrow="false"
          :icon-size="44"
          :title-style="{ fontSize: '34rpx' }"
          :value-style="{ textAlign: 'left', marginLeft: '20rpx', fontSize: '26rpx' }"
        >
          <text>模糊查询</text>
        </u-cell-item>
      </u-cell-group>
    </view>
    <view class="u-m-t-20">
      <u-cell-group>
        <u-cell-item
          :title="type === 'process' ? '操作' : '添加'"
          :arrow="false"
          :center="true"
          :title-style="cellButtonStyle"
          @tap="handleAdd"
        ></u-cell-item>
      </u-cell-group>
    </view>
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
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "contact-index",
  data() {
    return {
      id: "",
      pic: this.$store.state.defaultAvatar,
      userDetail: {},
      cellButtonStyle: {
        width: "100%",
        padding: 0,
        "text-align": "center",
        "font-size": "34rpx",
      },
      type: "",
      show: false,
      content: "",
      title: "同意申请",
    };
  },
  onLoad({ id, type = "" }) {
    this.id = id;
    this.getDetail();
    this.type = type;
  },
  onUnLoad() {
    this.setUserDetail({});
  },
  methods: {
    ...mapActions("contact", ["getContactDetail", "sendAgree"]),
    ...mapMutations("contact", ["setUserDetail"]),
    getDetail() {
      uni.showLoading({
        title: "加载中...",
        mask: false,
      });
      this.getContactDetail(this.id)
        .then((res) => {
          let data = res.data;
          this.userDetail = data;
          let userInfo = this.userInfo;
          let userData = {
            apply_id: data.id,
            avatar: userInfo.avatar,
            username: userInfo.username,
            status: "underReview",
            mobile: userInfo.mobile,
            gender: userInfo.gender,
            age: userInfo.age,
            nickname: userInfo.nickName,
          };
          this.setUserDetail(userData);
          uni.setNavigationBarTitle({
            title: data.username,
          });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          uni.hideLoading();
        });
    },
    handleEvent(status = "agreement") {
      uni.showLoading({
        title: "加载中...",
        mask: false,
      });
      let keys = ["nickname", "address", "username", "gender", "age", "avatar", "email", "id"];
      let userDetail = this.userDetail;
      let userInfo = this.userInfo;
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
      if (this.type === "process") {
        this.show = true;
        this.content = "确定同意" + this.userDetail.username + "的申请";
        return;
      }
      uni.navigateTo({
        url: "/pages/contact/detail/confirm?id=" + this.id,
      });
    },
  },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>

<style scoped></style>
