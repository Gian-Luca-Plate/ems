import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import ergebnis from '@/components/ergebnis.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
  ,{
    path: '/er',
    name: 'er',
    component: ergebnis
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
