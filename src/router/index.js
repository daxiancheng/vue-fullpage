import Vue from 'vue'
import Router from 'vue-router'
import fullpage from '@/components/fullpage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fullpage',
      component: fullpage
    }
  ]
})
