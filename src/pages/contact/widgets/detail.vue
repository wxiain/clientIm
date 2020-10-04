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
          v-for="(item, index) of items"
          :key="index"
          :title="item.title"
          :arrow="!!item.arrow"
          :icon-size="item.iconSize || 44"
          :title-style="item.titleStyle || { fontSize: '34rpx' }"
          :value-style="item.valueStyle || { textAlign: 'left', marginLeft: '20rpx', fontSize: '26rpx' }"
        >
          <text>{{ item.text }}</text>
        </u-cell-item>
      </u-cell-group>
    </view>
    <view class="u-m-t-20">
      <u-cell-group>
        <slot></slot>
      </u-cell-group>
    </view>
  </view>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      pic: this.$store.state.defaultAvatar,
      userDetail: {},
    };
  },
  props: {
    items: {
      type: Array,
      default: () => {
        return [
          { title: "个性签名", text: "还未开放" },
          { title: "来源", text: "模糊查询" },
        ];
      },
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions("contact", ["getContactDetail"]),
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
          this.$emit("data", { userDetail: data, userData });
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
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  mounted() {
    this.getDetail();
  },
};
</script>

<style scoped></style>
