import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EnterNumber from '@/components/EnterNumber'
import EnterAmount from '@/components/EnterAmount'
import pushAmount from '@/components/PushAmount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/enterNumber/:name',
      component: EnterNumber
    }, {
      path: '/enterAmount/:name/:number',
      component: EnterAmount
    }, {
      path: '/pushAmount',
      component: pushAmount
    }
  ]
})
