import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/app',
    name: 'app',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AppView.vue'),
  },
  {
    path: '/team',
    name: 'team',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TeamView.vue'),
  },
  {
    path: '/faq',
    name: 'faq',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/FaqView.vue'),
  },
  {
    path: '/treasury',
    name: 'treasury',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TreasuryView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
