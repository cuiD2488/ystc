<template>
  <div class="layout-default">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <m-tabbar></m-tabbar>
  </div>
</template>

<script>
import mTabbar from '@/components/footerBar'

export default {
  components: {
    mTabbar
  },
  computed: {
    routerName () {
      return this.$route.name
    }
  }
}
</script>

<style lang="less">
.layout-default{
  height: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
