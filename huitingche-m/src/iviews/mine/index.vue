<template>
  <div style="background: #f8f8f8">
    <!-- 个人中心 -->
    <div class="headerContent">
      <!-- 头部 -->
      <!-- <img src="" alt=""> -->
      <div class="headImg">
        <img src="../../assets/logo.png" alt="">
      </div>
      <div class="headPhone">
        <span>13622389007</span>
      </div>
    </div>
    <div class="navContent">
      <!-- 导航 -->
      <div v-for="(item, index) in navList" :key="index" class="navItem" @click="toLink(item.routeName)">
        <div class="navImg">
          <img :src="item.navImg" alt="">
        </div>
        <div>
          <span v-text="item.navText"></span>
        </div>
      </div>
    </div>
    <div>
      <!-- columnList -->
      <div class="columnItem">
        <p>常见问题</p>
        <p>消息中心</p>
        <p>联系我们</p>
        <p @click="$router.push({name: 'bindTel'})">绑定手机</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  compents: {
  },
  data () {
    return {
      navList: [
        {
          navImg: require('../../assets/wallet.png'),
          navText: '我的钱包',
          routeName: 'myWallet'
        },
        {
          navImg: require('../../assets/carMessage.png'),
          navText: '车辆信息',
          routeName: 2
        },
        {
          navImg: require('../../assets/parking.png'),
          navText: '停车记录',
          routeName: 'parkingRecord'
        }
      ]
    }
  },
  methods: {
    toLink (routeName) {
      this.$router.push({name: routeName})
    }
  }
}
</script>
<style lang="less" scoped>
.headerContent{
  background: linear-gradient(#6abedb, #b3ecff);
  position: relative;
  // height: 4rem;
  height: 15rem;
  .headImg{
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    overflow: hidden;
    background: #ddd;
    img{
      width: 100%;
    }
  }
  .headPhone{
    width: 100%;
    position: absolute;
    bottom: 2rem;
    text-align: center;
  }
}
.navContent{
    display:flex;
    justify-content: space-between;
    padding: 1.7rem 0;
    .navItem{
      .navImg{
        width : 2.3rem;
        height: 2.3rem;
        margin: 0 auto;
        margin-bottom: 1rem;
        img{
          width:100%;
          height:100%;
        }
      }
      width:30%;
      margin:0 1.5%;
      text-align:center;
    }
  }
.columnItem {
  display: flex;
  flex-direction: column;
  p{
    width: 100%;
    padding: 1.5rem 2.1rem;
    font-size: 1.6rem;
    text-align: left;
    margin: 0;
    box-sizing: border-box;
  }
}
</style>
