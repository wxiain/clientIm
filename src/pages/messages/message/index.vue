<template>
  <view class="messages w100vw w100vh page">
    <view class="item u-padding-20">
      <view v-for="item of messages" :key="item.id">
        <view class="text-center">
          <view class="u-p-10 bg-white u-m-b-10 dis-ib" style="width: auto">12:39</view>
        </view>
        <view v-if="item.send_id === userInfo.id" class="flex u-m-b-10">
          <view class="flex-sub"></view>
          <view class="u-padding-10 border-radius u-m-r-10 bg-white message"> 5555555552214422 </view>
          <u-avatar :src="defaultAvatar" :size="80"></u-avatar>
        </view>
        <view v-else class="flex u-m-b-10">
          <u-avatar :src="pic" :size="80"></u-avatar>
          <view class="u-padding-10 border-radius u-m-l-10 bg-white message primary"> ffsfeddefe </view>
          <view class="flex-sub"></view>
        </view>
      </view>
    </view>
    <u-line />
    <view class="input-wrap u-padding-10 flex align-center">
      <view class="w100 h100" style="max-height: 120rpx; overflow-y: auto">
        <u-input
          class="input u-p-l-5"
          :clearable="false"
          type="textarea"
          height="50"
          focus
          v-model="messageValue"
          :maxlength="500"
        ></u-input>
      </view>
      <view style="width: 10rpx"></view>
      <u-button size="mini" type="success" @tap="handleSend">发送</u-button>
    </view>
  </view>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "messages",
  data() {
    return {
      id: "",
      pic: "http://wxiain.com/imgs/ql.jpeg",
      receiveId: "",
      messageValue: "",
      messages: [
        { send_id: 1, id: 99999 },
        { send_id: 2, id: 11223 }
      ]
    };
  },
  /**
   * onLoad
   * @param id 当前用户id
   * @param receive_id 对方id
   */
  onLoad({ id, receive_id }) {
    this.id = id;
    this.receiveId = receive_id;
  },
  methods: {
    handleSend() {
      let { id, username, nickname, avatar, gender } = this.userInfo;
      let data = {
        send_id: id,
        receive_id: this.receiveId,
        message: this.messageValue,
        username,
        nickname,
        avatar,
        gender
      };
      uni.sendSocketMessage({
        data: JSON.stringify(data),
        success() {
          console.log("发送成功");
        },
        fail(err) {
          console.log(err);
        }
      });
      console.log(7777);
    }
  },
  computed: {
    ...mapState(["userInfo", "defaultAvatar"])
  }
};
</script>

<style scoped lang="scss">
.item {
  height: calc(100% - 90rpx);
  .message {
    font-size: 30rpx;
    height: auto;
    min-height: 65rpx;
    max-width: 70%;
    word-break: break-all;
    line-height: 2;
  }
}
.input-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #f7f7f7;
  .input {
    background: #fff;
  }
}
.border-radius {
  border-radius: 10rpx;
}
</style>
