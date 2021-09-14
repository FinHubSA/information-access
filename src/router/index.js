import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/components/Home.vue'
import SearchResults from '@/components/SearchResults.vue'
import HelloWorld from '@/components/HelloWorld.vue'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
