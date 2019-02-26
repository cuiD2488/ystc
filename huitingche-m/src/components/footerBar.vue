<template>
  <div>
    <tabbar @on-index-change="changeTab" @tabbar-text-active-color="'red'">
      <tabbar-item selected :link="{name: 'home'}" @tabbar-text-active-color="'red'">
         <img slot="icon" :src="tabVal === 0 ? require('../assets/homeRight.png') : require('../assets/home.png')">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :link="{name: 'location'}">
         <img slot="icon" :src="tabVal === 1 ? require('../assets/locationRight.png') : require('../assets/navigation.png')">
        <span slot="label">附近</span>
      </tabbar-item>
      <tabbar-item :link="{name: 'mine'}">
        <img slot="icon" :src="tabVal === 2 ? require('../assets/userRight.png') : require('../assets/user.png')">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data () {
    return {
      tabVal: 0
    }
  },
  methods: {
    changeTab (v) {
      this.tabVal = v
    }
  }
}
</script>
