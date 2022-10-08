import { createWebHistory, createRouter } from "vue-router"
import { getAnalytics, logEvent } from "firebase/analytics"

import Home from "../views/Home.vue"
import NotFound from "../views/NotFound.vue"

const routes = [
	{
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
		name: "about",
		path: "/about",
	},
	{
		component: () => import(/* webpackChunkName: "about" */ "../views/TrackMe.vue"),
		name: "TrackMe",
		path: "/track-me",
	},
	{
		component: NotFound,
		path: "/:catchAll(.*)",
		name: "404",
	},
	{
		component: Home,
		name: "home",
		path: "/",
	},
	{
		component: () => import(/* webpackChunkName: "about" */ "../views/StopTolling.vue"),
		name: "StopTolling",
		path: "/stop-tolling",
	},

]

const router = createRouter({
	base: import.meta.env.BASE_URL,
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, from, next) => 
{
	if (parseFloat(import.meta.env.VITE_CI))
	{
		try
		{
			const analytics = getAnalytics()
			logEvent(
				analytics,
				"page_view",
				{
					// type: "internal",
					title: to.name,
				}
			)
		}
		catch (e)
		{
			console.error(e)
		}
	}
	next()
})

export default router
