import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import UserList from '../views/UserList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: UserList
  },
  {
    path: '/:username',
    name: 'detail',
    component: () => import('../views/UserDetail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
