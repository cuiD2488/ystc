<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width:100%;
  overflow: auto;
}
html{
  font-size: 62.5%;
  /* font-size: 37.5px; */
}
html,body{
  height:100%;
  width:100%;
  margin:0;
  padding:0;
}
body{
  font-size: 0.38rem;
   /* font-size: 37.5px; */
}
</style>
