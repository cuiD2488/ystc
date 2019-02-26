<template>
  <div style="    background: #f6f6f6;height:100%">
    <!-- 停车记录 -->
    <div class="parkingRecordContent">
      <div v-for="(item, index) in recordList" :key="index">
        <div class="location">{{item.location}}</div>
        <div class="date">
          <span>{{item.date}}</span>
          <span>{{item.begingTime}}至{{item.endTime}}</span>
        </div>
        <div class="stopTime">{{item.stopTime}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      recordList: [
        {
          location: '深圳市宝安区西乡街道银田工业区停车场',
          date: '2019-02-16',
          begingTime: '10:00',
          endTime: '13:30',
          stopTime: '总停留3小时30分钟'
        },
        {
          location: '深圳市宝安区西乡街道银田工业区停车场',
          date: '2019-02-16',
          begingTime: '10:00',
          endTime: '13:30',
          stopTime: '总停留3小时30分钟'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .parkingRecordContent{
    text-align: left;
    padding: 1rem 0;
    font-size: 1.4rem;
    >div {
      margin-bottom: .6rem;
      background: #fff;
      padding: 1.9rem 1.5rem;
    }
    .date{
      display: flex;
      justify-content: space-between;
      color: #898989;
    }
  }
</style>
