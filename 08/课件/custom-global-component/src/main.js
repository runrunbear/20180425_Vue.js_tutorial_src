import Vue from 'vue'
import App from './App.vue'

import Loading from './components/loading'

Vue.use(Loading)

new Vue({
	el: '#app',
	render: h => h(App)
})