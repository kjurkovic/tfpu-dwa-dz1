import { createRouter, createWebHistory } from 'vue-router'
import CommitListView from '../views/CommitListView.vue'

const routes = [
  {
    path: '/',
    name: 'list',
    component: CommitListView,
  },
  {
    path: '/details/:id',
    name: 'details',
    component: () => import(/* webpackChunkName: "about" */ '../views/CommitDetailsView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
