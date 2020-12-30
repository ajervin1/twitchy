import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import ShowClip from './views/ShowClip'

Vue.use(Router)


const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/clips/:slug',
			component: ShowClip
		}
	]
})

export default router
