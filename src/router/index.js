import { createRouter, createWebHistory } from 'vue-router'
import MapsPage from '@/views/MapsPage.vue'
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import TrackingsView from '../views/TrackingsView.vue';
import LandingPage from '@/views/LandingPage.vue';
import ContactPage from '@/views/ContactPage.vue';
const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
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
  {
  path: '/ContactPage',
  name: 'ContactPage',
  component: ContactPage,
  }
]




const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  if (to.meta.requiresAuth && !isAuthenticated) next({ name: 'Login' });
  else next();
});

export default router
