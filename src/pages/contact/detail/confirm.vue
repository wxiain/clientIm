<template>
  <view>
    <view class="u-p-20">
      <u-input v-model="value" border type="textarea" :height="height" :auto-height="true" />
    </view>
    <save @save="handleSave" :loading="loading" position="center"></save>
  </view>
</template>

<script>
import save from "@/components/save";
import { mapActions, mapState } from "vuex";
export default {
  name: "confirm",
  data() {
    return {
      value: "",
      height: 200,
      loading: false,
    };
  },
  components: {
    save,
  },
  methods: {
    ...mapActions("contact", ["sendApply"]),
    handleSave() {
      this.loading = true;
      this.sendApply(Object.assign({}, this.userDetail, { message: this.value }))
        .then((res) => {
          uni.showToast({
            title: res.message,
            mask: true,
          });
          setTimeout(() => {
            uni.navigateBack({ delta: 2 });
          }, 1500);
        })
        .catch((err) => {
          uni.showToast({
            title: err,
            icon: "none",
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    ...mapState("contact", ["userDetail"]),
  },
};
</script>

<style scoped></style>
