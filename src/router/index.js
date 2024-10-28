import { createRouter, createWebHistory } from 'vue-router'
import MapsPage from '@/views/MapsPage.vue'
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import TrackingsView from '../views/TrackingsView.vue';
const routes = [
  {
    path: '/MapsPage',
    name: 'MapsPage',
    component: MapsPage,
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/Register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/Trackings',
    name: 'Trackings',
    component: TrackingsView,
  },
]

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  if (to.meta.requiresAuth && !isAuthenticated) next({ name: 'Login' });
  else next();
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
