import Vue from 'vue'
import App from './App.vue'
import http from './api'
import store from '../store'
import router from '../router'
// Mock Data

// Store



new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
