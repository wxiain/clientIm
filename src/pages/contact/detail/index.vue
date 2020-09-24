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
          title="添加"
          :arrow="false"
          :center="true"
          :title-style="cellButtonStyle"
          @tap="handleAdd"
        ></u-cell-item>
      </u-cell-group>
    </view>
  </view>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
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
    };
  },
  onLoad({ id }) {
    this.id = id;
    this.getDetail();
  },
  onUnLoad() {
    this.setUserDetail({});
  },
  methods: {
    ...mapActions("contact", ["getContactDetail"]),
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
          let userData = JSON.parse(JSON.stringify(data));
          userData.apply_id = data.id;
          Reflect.deleteProperty(userData, "update_at");
          Reflect.deleteProperty(userData, "id");
          Reflect.deleteProperty(userData, "mobile");
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
    handleAdd() {
      uni.navigateTo({
        url: "/pages/contact/detail/confirm?id=" + this.id,
      });
    },
  },
};
</script>

<style scoped></style>
