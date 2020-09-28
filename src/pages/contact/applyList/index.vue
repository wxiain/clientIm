<template>
  <dataList :request="getApplyList" @data="handleList" :right-away="true">
    <item v-for="item of list" :bean="item" :key="item.id" @click.native="handleGo(item)"></item>
  </dataList>
</template>

<script>
import { mapActions } from "vuex";
import dataList from "@/components/data-list";
import item from "@/pages/contact/widgets/item";
export default {
  name: "applyList",
  components: {
    dataList,
    item,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    ...mapActions("contact", ["getApplyList"]),
    handleList(data) {
      this.list = data;
    },
    handleGo(item) {
      uni.navigateTo({
        url: "/pages/contact/detail/index?type=process&id=" + item.user_id,
      });
    },
  },
};
</script>
