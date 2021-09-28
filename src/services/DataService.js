import { createStore } from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://134.209.134.50:5000/api',
  headers: {
    'Content-type': 'application/json',
  },
})

const state = {
  SearchString: '',
  articles: [1, 2, 3],
}

const getters = {
  articles: (state) => state.articles,
  articlesSinceYear: (state) => (year) => {
    return state.articles.filter((element) => element.YearPublished >= year)
  },
}

const actions = {
  getArticles({ commit }) {
    http.get('/articles').then((response) => {
      commit('SET_ARTICLES', response.data)
    })
  },
}

const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
}

export default createStore({
  state,
  getters,
  actions,
  mutations,
})
