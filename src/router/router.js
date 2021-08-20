import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
   {
      path: '/',
      component: () => import('../modules/pokemon/pages/ListPage.vue')
   },
   {
      path: '/about',
      component: () => import('../modules/pokemon/pages/AboutPage.vue')
   },
   {
      path: '/id',
      component: () => import('../modules/pokemon/pages/ShowPage.vue')
   },
   {
      path: '/:pathMatch(.*)*', 
      component: () => import('../modules/shared/pages/NoPageFound.vue')
   },


]

const router = createRouter({
   history: createWebHashHistory(),
   routes,
})

export default router