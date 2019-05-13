import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ssss from '../components/mode';
const a = () => import('../components/a')
const b = () => import('../components/b')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'HelloWorld',
      component: ssss(a, 'a')
    },
    {
      path: '/b',
      name: 'HelloWorld',
      component: ssss(b, 'b')
    }
  ]
})
