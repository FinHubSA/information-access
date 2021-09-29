import { createStore } from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-type': 'application/json',
  },
})
//http://localhost:5000/api/articles/search?title=in
const state = {
  SearchString: '',
  Field: 'title',
  articles: [],
}

const getters = {
  articles: (state) => state.articles,
  articlesSinceYear: (state) => (year) => {
    return state.articles.filter((element) => element.YearPublished >= year)
  },
  SearchString: (state) => state.SearchString,
  Field: (state) => state.Field,
}

const actions = {
  async getArticles({ commit }) {
    await http
      .get('articles/search?' + state.Field + '=' + state.SearchString)
      .then((response) => {
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
  updateField(state, Field) {
    state.Field = Field
  },
}

export default createStore({
  state,
  getters,
  actions,
  mutations,
})
