<template>
  <view class="page w100 w100vh u-p-t-20">
    <view class="u-m-b-20">
      <u-cell-group :border="false">
        <u-cell-item title="新的朋友" :title-style="{ fontSize: '34rpx' }" @tap="handleSearching"></u-cell-item>
        <u-cell-item
          title="好友申请"
          :title-style="{ fontSize: '34rpx' }"
          :border-bottom="false"
          @tap="handleApply"
        ></u-cell-item>
        <!--<u-cell-item icon="photo" title="相册"></u-cell-item>-->
        <!--<u-cell-item icon="coupon" title="卡券"></u-cell-item>-->
        <!--<u-cell-item icon="heart" title="关注"></u-cell-item>-->
      </u-cell-group>
    </view>
    <view>
      <data-list @data="handleData" :request="getContactList" right-away>
        <item
          v-for="item of list"
          :key="item.id"
          :bean="item[userInfo.id !== item.user.id ? 'user' : 'apply']"
          @click.native="
            () => {
              handleDetail(item[userInfo.id !== item.user.id ? 'user' : 'apply']);
            }
          "
        ></item>
      </data-list>
      <!--<u-cell-group :border="false">
        <u-cell-item title="新的朋友" :title-style="{ fontSize: '34rpx' }" :border-bottom="false"></u-cell-item>
        <u-cell-item icon="photo" title="相册"></u-cell-item>
        <u-cell-item icon="coupon" title="卡券"></u-cell-item>
        <u-cell-item icon="heart" title="关注"></u-cell-item>
      </u-cell-group>-->
    </view>
  </view>
</template>

<script>
import dataList from "@/components/data-list";
import item from "@/pages/contact/widgets/item";
import { mapActions, mapState } from "vuex";
export default {
  name: "contact",
  data() {
    return {
      list: [],
    };
  },
  methods: {
    ...mapActions("contact", ["getContactList"]),
    handleSearching() {
      uni.navigateTo({
        url: "/pages/contact/searching/index",
      });
    },
    handleData(list) {
      this.list = list;
    },
    handleDetail(bean) {
      uni.navigateTo({
        url: "/pages/contact/detail/friendData?id=" + bean.id,
      });
    },
    handleApply() {
      uni.navigateTo({
        url: "/pages/contact/applyList/index",
      });
    },
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  components: {
    dataList,
    item,
  },
};
</script>
