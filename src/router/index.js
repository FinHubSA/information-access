import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/views/Home/Home.vue'
import SearchResults from '@/views/SearchResults/SearchResults.vue'
import About from '@/views/About/About.vue'
import FAQ from '@/views/FAQ/FAQ.vue'
import Preview from '@/views/Preview/Preview.vue'

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
  {
    path: '/Preview/:title/:authorsurname/:authorinitial/:journalname/:url/:previouspage/:from',
    name: 'Preview',
    component: Preview,
    props: {},
  },
  { path: '/*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
