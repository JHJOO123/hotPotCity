import Vue from 'vue'
import Router from 'vue-router'

import orders from '@/components/orders'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: '/orders',
          component: orders,
        }
      ]
    }
  ]
})
