// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';

// 引入全局样式文件
import 'common/stylus/reset.css';
import 'common/stylus/base.css';

// axios基础参数配置
var Axios = axios.create({
    baseURL: process.env.MAPI_WITMALL_PATH,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
});
// 设置全局的重试次数，重试的间隙
Axios.defaults.retry = 4;
Axios.defaults.retryDelay = 1000;

// 响应拦截器
Axios.interceptors.response.use(undefined, (err) => {
    var config = err.config;
    // 判断是否配置了重试
    if(!config || !config.retry) return Promise.reject(err);

    // 设置重置次数，默认为0
    config.__retryCount = config.__retryCount || 0;

    // 判断是否超过了重试次数
    if(config.__retryCount >= config.retry) {
        // 抛出错误
        return Promise.reject(err);
    }

    // 重试次数自增
    config.__retryCount += 1;

    // 延时处理
    var backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, config.retryDelay || 1);
    });

    // 重新发起axios请求
    return backoff.then(function() {
        return axios(config);
    });
});

Vue.prototype.axios = Axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
