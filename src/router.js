import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './components/Home.vue'
import SearchResults from './components/SearchResults.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/searchresults',
    name: 'SearchResults',
    component: SearchResults,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
