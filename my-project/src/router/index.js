import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Reverse from '@/components/Reverse'
import Loop from '@/components/Loop'
import Test from '@/components/Test'
import ajax from '@/components/ajax'
import Page from '@/components/Page'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/reverse',
      name: 'reverse',
      component: Reverse
    },
    {
      path: '/loop',
      name: 'loop',
      component: Loop
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/ajax',
      name: 'ajax',
      component: ajax
    },
    {
      path: '/page',
      name: 'page',
      component: Page
    }
  ]
})
