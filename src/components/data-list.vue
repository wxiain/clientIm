<template>
  <view>
    <slot></slot>
    <slot v-if="loaded && list.length" name="loaded">
      <view class="text-center u-p-b-20">
        <u-icon name="checkmark-circle-fill" size="30"></u-icon>
        <text>数据加载完成</text>
      </view>
    </slot>
    <slot name="loading" v-else-if="loading">
      <view class="text-center">
        <u-loading :show="true" mode="flower"></u-loading>
        <text>数据加载中...</text>
      </view>
    </slot>
    <slot name="noData" v-else-if="!loading && !list.length && loaded">
      <view class="text-center u-p-t-50">
        <u-icon name="eye-off" size="50"></u-icon>
        <view>暂无数据</view>
      </view>
    </slot>
  </view>
</template>

<script>
export default {
  name: "data-list",
  props: {
    request: {
      type: Function,
      required: true,
    },
    rData: {
      type: [Object, Array],
    },
    pagination: {
      type: Object,
      default: () => {
        return {
          page: 1,
          page_size: 10,
        };
      },
    },
    rightAway: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
      loaded: false,
      list: [],
      page: this.pagination.page,
      page_size: this.pagination.page_size,
    };
  },
  watch: {
    rData() {
      if (!this.loading) {
        this.init();
      }
    },
  },
  methods: {
    init() {
      this.page = 1;
      this.list = [];
      this.getList();
    },
    getList(isUnshift = false) {
      if (!this.loading) {
        this.loading = true;
        let params = Object.assign({}, this.rData, { page: this.page, page_size: this.page_size });
        this.request(params)
          .then((res) => {
            let { data } = res;
            this.loaded = data.length < this.page_size;
            this.list = isUnshift ? [...data, ...this.list] : [...this.list, ...data];
            this.$emit("data", this.list);
          })
          .catch((err) => {
            this.clearList();
            console.log(err);
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    clearList() {
      this.list = [];
      this.$emit("data", []);
    },
    reachBottom() {
      if (!this.loaded && !this.loading) {
        this.page++;
        this.getList();
      }
    },
    reachTop() {
      if (!this.loaded && !this.loading) {
        this.page++;
        this.getList(true);
      }
    },
  },
  mounted() {
    if (this.rightAway) {
      this.init();
    }
  },
};
</script>

<style scoped lang="scss"></style>
