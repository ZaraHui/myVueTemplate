import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const helloWorld = resolve => require(['components/commonComponents/helloWorld'], resolve);

// 首页
const home = resolve => require(['src/pages/home'], resolve);
const homeComponent1 = resolve => require(['components/home/homeComponent1'], resolve);
const homeComponent2 = resolve => require(['components/home/homeComponent2'], resolve);

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'helloWorld',
            component: helloWorld
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            children: [
                {
                    path: '/home/homeComponent1', name: 'homeComponent1', title: '', component: homeComponent1
                },
                {
                    path: '/home/homeComponent2', name: 'homeComponent2', title: '', component: homeComponent2
                },
            ]
        }
    ]
})
