import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const helloWorld = resolve => require(['components/commonComponents/helloWorld'], resolve);

const test = resolve => require(['src/pages/testPage'], resolve);
const testComponent1 = resolve => require(['components/testPage/testComponent1'], resolve);
const testComponent2 = resolve => require(['components/testPage/testComponent2'], resolve);

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'helloWorld',
            component: helloWorld
        },
        {
            path: '/test',
            name: 'test',
            component: test,
            children: [
                {
                    path: '/test/testComponent1', name: 'testComponent1', title: '', component: testComponent1
                },
                {
                    path: '/test/testComponent2', name: 'testComponent2', title: '', component: testComponent2
                },
            ]
        }
    ]
})
