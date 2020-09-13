<template>
  <view class="wrap">
    <view class="top"></view>
    <view class="content">
      <u-form :model="formBean" ref="form" label-width="0">
        <u-form-item prop="username">
          <u-input v-model="formBean.username" placeholder="请输入账号" />
        </u-form-item>
        <u-form-item prop="password">
          <u-input type="password" v-model="formBean.password" placeholder="请输入密码" :password-icon="true" />
        </u-form-item>
      </u-form>
      <button :style="[inputStyle]" class="getCaptcha u-margin-top-26" @tap="handleLogin">登录</button>
      <view class="alternative">
        <view class="flex"></view>
        <view class="issue" @tap="handleRegister">还没有账号?去注册</view>
      </view>
    </view>
    <!--<view class="buttom">
      <view class="loginType">
        <view class="wechat item">
          <view class="icon"><u-icon size="70" name="weixin-fill" color="rgb(83,194,64)"></u-icon></view>
          微信
        </view>
        <view class="QQ item">
          <view class="icon"><u-icon size="70" name="qq-fill" color="rgb(17,183,233)"></u-icon></view>
          QQ
        </view>
      </view>-->
    <u-toast ref="toast" />
    <!--<u-mask :show="loading"></u-mask>
    <u-loading size="40" color="primary" :show="loading"></u-loading>-->
  </view>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      formBean: {
        username: "12",
        password: "111111",
      },
      loading: true,
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          {
            required: true,
            min: 6,
            max: 16,
            message: "请输入密码, 6-16位",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  onReady() {
    this.$refs.form.setRules(this.rules);
  },
  computed: {
    inputStyle() {
      let style = {};
      let { username, password } = this.formBean;
      if (username && password && password.length >= 6) {
        style.color = "#fff";
        style.backgroundColor = this.$u.color["primary"];
      }
      return style;
    },
  },
  methods: {
    ...mapActions(["login"]),
    ...mapMutations(["setCurrent"]),
    handleLogin() {
      this.$refs.form.validate((v) => {
        if (v) {
          uni.showLoading({ title: "登录中...", mask: true });
          this.login(this.formBean)
            .then(() => {
              this.setCurrent(0);
              this.$refs.toast.show({
                title: "登录成功",
                position: "top",
                type: "success",
                url: "/pages/home/index",
              });
            })
            .finally(() => {
              uni.hideLoading();
            });
        }
      });
    },
    handleRegister() {
      uni.navigateTo({
        url: "/pages/user/register/index",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  font-size: rpx(28);
  .content {
    width: rpx(600);
    margin: rpx(80) auto 0;

    .title {
      text-align: left;
      font-size: rpx(60);
      font-weight: 500;
      margin-bottom: rpx(100);
    }
    input {
      text-align: left;
      margin-bottom: rpx(10);
      padding-bottom: rpx(6);
    }
    .tips {
      color: $u-type-info;
      margin-bottom: rpx(60);
      margin-top: rpx(8);
    }
    .getCaptcha {
      background-color: #a0cfff;
      color: $u-tips-color;
      border: none;
      font-size: rpx(30);
      padding: rpx(12) 0;

      &::after {
        border: none;
      }
    }
    .alternative {
      color: $u-tips-color;
      display: flex;
      justify-content: space-between;
      margin-top: rpx(30);
    }
  }
}
</style>
