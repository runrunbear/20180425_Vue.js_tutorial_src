import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import store from './store/index.js'
import axios from 'axios'
import Loading from './components/loading'

import filters from './filters'

//Vue.filter(名字,函数)
//循环遍历所有过滤器
Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]));

Vue.use(VueRouter);
Vue.use(Loading);

//关于axios配置
axios.interceptors.request.use(function(config) { //发送请求
	store.dispatch('showLoading')
	return config;
}, function(error) {
	return Promise.reject(error);
});

axios.interceptors.response.use(function(response) { //请求回来
	store.dispatch('hideLoading')
	return response;
}, function(error) {
	return Promise.reject(error);
});
//axios.defaults.baseURL='http://localhost:8082/'; //配置请求根路径
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios; //把axios对象挂到Vue原型上



const router = new VueRouter({
	mode: 'history',
	scrollBehavior: () => ({
		y: 0
	}),
	routes
});

require('./assets/css/base.css'); //全局引入

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})