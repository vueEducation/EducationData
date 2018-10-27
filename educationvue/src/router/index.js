import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home'
import classt from '@/views/classt/classt'
import find from '@/views/find/find'
import me from '@/views/me/me'
import study from '@/views/study/study'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: {
        path:'/home',
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/classt',
          name: 'classt',
          component: classt
        },
        {
          path: '/find',
          name: 'find',
          component: find
        },
        {
          path: '/me',
          name: 'me',
          component: me
        },
        {
          path: '/study',
          name: 'study',
          component: study
        }
      ]
    },
    
  ]
})
