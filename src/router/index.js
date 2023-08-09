import { createRouter,createWebHistory} from 'vue-router'
import Home from '../views/huoxingViews/homePage/homePage.vue'

import routers from './huoxiangViews/index.js'
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/loginPage.vue')
  },
  ...routers
]

const router = createRouter({
    //createWebHashHistory
    //createWebHistory
  history: createWebHistory('/'),
  routes
})
// router.beforeEach((to, from, next) => {
// 	if (!localStorage.getItem('token')) {
// 		if (to.name == "login") {
// 			next();
// 		} else {
// 			router.push('login')
// 		}
// 	} else {
// 		next();
// 	}
// });
export default router