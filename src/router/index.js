import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignIn.vue'
import Register from '../views/Register.vue'
import Feed from '../views/Feed.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed
    }
  ]
})

export default router
