import { createRouter, createWebHistory } from 'vue-router'
import MapsPage from '@/views/MapsPage.vue'
const routes = [
  {
    path: '/MapsPage',
    name: 'MapsPage',
    component: MapsPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
