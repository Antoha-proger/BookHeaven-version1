import { createRouter, createWebHistory } from 'vue-router'
// import Navigation from '@/components/Navigation/Navigation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/pages/Home.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/components/pages/SearchPage.vue')
    },
    {
      path: '/achievement',
      name: 'achievement',
      component: () => import('@/components/pages/AchievementPage.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/components/pages/ProfilePage.vue')
    }
  ]
})

export default router
