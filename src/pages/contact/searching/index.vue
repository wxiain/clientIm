<template>
  <view class="w100 w100vh page">
    <view class="u-p-20 bg-white">
      <u-search
        placeholder="手机号/用户名"
        v-model="keywords"
        clearabled
        @search="handleSearch"
        @custom="handleSearch"
      ></u-search>
    </view>
    <u-line></u-line>
    <u-line></u-line>
    <view class="u-m-t-20 bg-white" style="min-height: calc(100vh - 126rpx);">
      <data-list :request="getSearching" :r-data="params" @data="handlerData" ref="list">
        <Item v-for="item of list" :key="item.id" :bean="item" @click.native="handleDetail(item)"></Item>
      </data-list>
    </view>
  </view>
</template>

<script>
import Item from "../widgets/item";
import dataList from "@/components/data-list";
import { mapActions } from "vuex";
export default {
  components: {
    Item,
    dataList,
  },
  data() {
    return {
      keywords: "",
      list: [],
      params: {},
    };
  },
  methods: {
    ...mapActions("contact", ["getSearching"]),
    handleSearch() {
      this.params = {
        keywords: this.keywords,
      };
    },
    handlerData(list) {
      this.list = list;
    },
    handleDetail(item) {
      uni.navigateTo({
        url: "/pages/contact/detail/index?id=" + item.id,
      });
    },
  },
  onReachBottom() {
    this.$nextTick(() => {
      this.list.length && this.$refs.list.reachBottom();
    });
  },
};
</script>
