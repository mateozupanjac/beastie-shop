import { createRouter, createWebHistory } from "vue-router";
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing-page",
      component: LandingView
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/contact",
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: "/profile",
      name: 'profile',
      component: () => import('@/views/ProfileView.vue')
    },
    {
      path: "/cart",
      name: 'cart',
      component: () => import('@/views/CartView.vue')
    }
  ],
});

export default router;
