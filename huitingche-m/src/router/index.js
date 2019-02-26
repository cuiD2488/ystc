import Vue from 'vue'
import Router from 'vue-router'
import home from '@/iviews/home'
import layout from '@/layout/defalut'
import location from '@/iviews/location'
import Intelligence from '@/iviews/parking/Intelligence'
import bindTel from '@/iviews/mine/bindTel'
import mine from '@/iviews/mine'
import myWallet from '@/iviews/mine/myWallet'
import parkingRecord from '@/iviews/mine/parkingRecord'
// const home = () => import('@/iviews/home')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: {name: 'home'},
      component: layout,
      children: [
        {
          path: 'home',
          name: 'home',
          meta: {
            title: '首页'
          },
          component: home
        },
        {
          path: 'location',
          name: 'location',
          meta: {
            title: '查询附近车位'
          },
          component: location
        },
        {
          path: 'mine',
          name: 'mine',
          meta: {
            title: '个人中心'
          },
          component: mine
        },
        {
          path: '/mine/bindTel',
          name: 'bindTel',
          meta: {
            title: '注册'
          },
          component: bindTel
        },
        {
          path: '/mine/myWallet',
          name: 'myWallet',
          meta: {
            title: '我的钱包'
          },
          component: myWallet
        },
        {
          path: '/mine/parkingRecord',
          name: 'parkingRecord',
          meta: {
            title: '停车记录'
          },
          component: parkingRecord
        },
        {
          path: '/parking/Intelligence',
          name: 'Intelligence',
          meta: {
            title: '智能停车'
          },
          component: Intelligence
        }
      ]
    }
  ]
})
