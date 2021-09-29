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
  articles: [],
}

const getters = {
  articles: (state) => state.articles,
  articlesSinceYear: (state) => (year) => {
    return state.articles.filter((element) => element.YearPublished >= year)
  },
  SearchString: (state) => state.SearchString,
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
  updateSearchString(state, SearchString) {
    state.SearchString = SearchString
  },
}

export default createStore({
  state,
  getters,
  actions,
  mutations,
})
