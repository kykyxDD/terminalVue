import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EnterNumber from '@/components/EnterNumber'
import EnterAmount from '@/components/EnterAmount'
import pushAmount from '@/components/PushAmount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/enterNumber/:name',
      component: EnterNumber
    }, {
      path: '/enterAmount',
      component: EnterAmount
    }, {
      path: '/pushAmount',
      component: pushAmount
    }
  ]
})
