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
        <u-form-item prop="confirmPassword">
          <u-input
            type="password"
            v-model="formBean.confirmPassword"
            placeholder="请再次输入密码"
            :password-icon="true"
          />
        </u-form-item>
      </u-form>
      <button :style="[inputStyle]" class="getCaptcha u-margin-top-26" @tap="handleRegister">注册</button>
      <view class="alternative">
        <view class="flex"></view>
        <view class="issue" @tap="handleLogin">已有账号?去登录</view>
      </view>
    </view>
    <!--<u-toast ref="toast" />-->
    <u-modal
      v-model="show"
      @confirm="handleConfirm"
      ref="uModal"
      :mask-close-able="true"
      :show-cancel-button="true"
      :show-title="false"
      :content="content"
    ></u-modal>
  </view>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formBean: {
        username: "",
        password: "",
        confirmPassword: "",
        type: "login",
      },
      content: "",
      show: false,
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
        confirmPassword: [
          {
            required: true,
            trigger: ["blur", "change"],
            validator: (rules, value, cb) => {
              if (!this.formBean.password) {
                cb(new Error("请先输入密码"));
              } else if (value !== this.formBean.password) {
                cb(new Error("两次密码输入不一致"));
              } else {
                cb();
              }
            },
          },
        ],
      },
      status: true,
    };
  },
  onReady() {
    this.$refs.form.setRules(this.rules);
  },
  computed: {
    inputStyle() {
      let style = {};
      let { username, password, confirmPassword } = this.formBean;
      if (username && password && password.length >= 6 && password === confirmPassword) {
        style.color = "#fff";
        style.backgroundColor = this.$u.color["primary"];
      }
      return style;
    },
  },
  methods: {
    ...mapActions(["register"]),
    handleRegister() {
      this.$refs.form.validate((v) => {
        if (v) {
          this.register(this.formBean)
            .then((res) => {
              this.status = true;
              this.content = res.message + ", 将返回首页";
            })
            .catch((err) => {
              this.status = false;
              this.content = err.message;
            })
            .finally(() => {
              this.show = true;
            });
        }
      });
    },
    handleLogin(type = "navigateTo") {
      uni[type]({
        url: "/pages/user/login/index",
      });
    },
    handleConfirm() {
      if (this.status) {
        uni.navigateBack();
      }
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
