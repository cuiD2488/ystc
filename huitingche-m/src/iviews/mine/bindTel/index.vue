<template>
  <div style="background:#f6f6f6;">
    <!-- 绑定手机号 -->
    <div class="bindTelTitle">首次登陆请绑定手机号</div>
    <div class="bindTelContent">
      <group>
      <!-- <x-input title="验证码">
        <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
      </x-input> -->
        <x-input title="手机号" class="weui-vcode">
        </x-input>
        <x-input title="验证码" class="weui-vcode">
          <x-button slot="right" type="primary" mini>发送验证码</x-button>
        </x-input>
      </group>
      <div class="agreement">
        <check-icon :value.sync="agreement1">我已阅读并同意<router-link to="/">路内停车服务协议</router-link></check-icon>
        <br>
        <check-icon :value.sync="agreement2">我已阅读并同意<router-link to="/">>销户退费说明</router-link></check-icon>
      </div>
       <x-button type="primary" style="margin-top: 1rem;">确定</x-button>
    </div>
    <div class="footMessg">
      <p>技术支持：深圳市云天数字科技有限公司</p>
    </div>
  </div>
</template>
<script>
import { XInput, Group, XButton, Cell, CheckIcon } from 'vux'
export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell,
    CheckIcon
  },
  data () {
    return {
      agreement1: false,
      agreement2: false
    }
  }
}
</script>
<style lang="less" scoped>
  .bindTelTitle{
    height: 3rem;
    line-height: 3rem;
    font-size: 1.6rem;
    background: #fff;
    text-align: left;
    padding-left: 2rem;
}
.agreement{
  text-align: left;
  padding-left: 1rem;
  padding: 2rem 0;
}
  .footMessg{
    position: absolute;
    bottom: 10rem;
    text-align: center;
    width: 100%;
    color: #999;
    font-size: 1.2rem;
  }
</style>
