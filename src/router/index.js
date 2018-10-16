import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
