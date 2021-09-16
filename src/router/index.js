import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/components/Home.vue'
import SearchResults from '@/components/SearchResults.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import About from '@/components/About.vue'
import FAQ from '@/components/FAQ.vue'

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
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld,
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
