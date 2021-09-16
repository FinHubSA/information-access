import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/views/Home.vue'
import SearchResults from '@/views/SearchResults.vue'
import About from '@/views/About.vue'
import FAQ from '@/views/FAQ.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/searchresults',
    name: 'SearchResults',
    component: SearchResults,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
