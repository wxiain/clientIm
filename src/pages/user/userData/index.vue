<template>
  <view class="wrap">
    <u-form :model="formBean" label-width="120" size="mini">
      <u-form-item label="用户名" left-icon="account" label-width="140">
        <u-input v-model="formBean.username" maxlength="10" placeholder="请输入用户名" />
      </u-form-item>
      <u-form-item label="手机" left-icon="phone" label-width="140">
        <u-input v-model="formBean.mobile" maxlength="11" placeholder="请输入手机号码" />
      </u-form-item>
      <u-form-item label="昵称"><u-input v-model="formBean.nickname" placeholder="请输入昵称" /></u-form-item>
      <u-form-item label="性别">
        <singleSheet :list="genderList" v-model="formBean.gender" placeholder="请选择内容"></singleSheet>
      </u-form-item>
      <u-form-item label="年龄"><u-input v-model="formBean.age" type="number" placeholder="请输入年龄" /></u-form-item>
      <u-form-item label="地址"><u-input v-model="formBean.address" placeholder="请输入地址" /></u-form-item>
      <u-form-item label="e-mail"><u-input v-model="formBean.email" placeholder="请输入e-mail" /></u-form-item>
    </u-form>
    <save @save="handleSave" :loading="loading"></save>
    <u-toast ref="toast" />
  </view>
</template>

<script>
import singleSheet from "@/components/single-sheet";
import save from "@/components/save";
import { mapActions, mapMutations } from "vuex";
import { genderList } from "@/configs/fieldData";

export default {
  data() {
    let userInfo = this.$store.state.userInfo;
    return {
      userInfo,
      formBean: Object.assign(
        {},
        {
          username: "",
          nickname: "",
          gender: "",
          age: "",
          address: "",
          email: "",
          mobile: "",
        },
        userInfo
      ),
      loading: false,
      genderList: Object.freeze(genderList),
    };
  },
  methods: {
    ...mapActions("user", ["changeUserInfo"]),
    ...mapMutations(["setUserInfo"]),
    handleSave() {
      Reflect.deleteProperty(this.formBean, "create_at");
      Reflect.deleteProperty(this.formBean, "update_at");
      this.changeUserInfo(this.formBean)
        .then((res) => {
          this.setUserInfo(Object.assign({}, this.userInfo, res.data));
          this.$refs.toast.show({
            title: res.message,
            position: "top",
            type: "success",
          });
        })
        .catch((err) => {
          this.$refs.toast.show({
            title: err.message,
            position: "top",
            type: "error",
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  components: {
    singleSheet,
    save,
  },
};
</script>

<style scoped lang="scss">
.wrap {
  padding: rpx(30);
}
</style>
