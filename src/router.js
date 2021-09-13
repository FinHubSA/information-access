import { createWebHistory, createRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
  },
  //Can add this in once search results is merged
  //{
  //path: '/search-results',
  //name: 'Search Results',
  //component: SearchBar, SearchResults,
  //},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
