import Vue from 'vue'
import Vuex from 'vuex'
import publick from './publick'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: [
    publick
  ]
})
