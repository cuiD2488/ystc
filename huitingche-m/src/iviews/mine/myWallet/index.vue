<template>
  <div style="background:#f6f6f6">
    <!-- 我的钱包 -->
    <div class="headerContent">
      <!-- 头部 -->
      <div>
        <span>余额(元)</span>
      </div>
      <div>
        <strong>1.00</strong>
      </div>
      <!-- <img src="" alt=""> -->
    </div>
    <div class="navContent">
      <p>充值</p>
      <p>提现</p>
      <p>账单明细</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.headerContent{
  background: linear-gradient(#6abedb, #b3ecff);
  position: relative;
  height: 15rem;
  text-align: center;
  color:#fff;
  font-size: 1.8rem;
  padding-top: 5rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
}
.navContent{
  background: #fff;
  display: flex;
  flex-direction: column;
  p{
    width: 100%;
    padding: 1.5rem 2.1rem;
    font-size: 1.6rem;
    text-align: left;
    margin: 0;
    box-sizing: border-box;
    margin-bottom: 1rem;
  }
}
</style>
