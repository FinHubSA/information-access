import { createStore } from 'vuex'
import axios from 'axios'

const Endings = {
  title: 'title',
  author: 'authorSurname',
  journal: 'journalName',
}

const http = axios.create({
  baseURL: 'https://api-aaronskit.org/api/',
  headers: {
    'Content-type': 'application/json',
  },
})

const state = {
  SearchString: '',
  Field: 'title',
  articles: [],
  yearStart: '',
  yearEnd: '',
  custom: false,
}

const getters = {
  articles: (state) => state.articles,
  articlesSinceYear: (state) => {
    if (state.yearStart==0){
      return state.articles
    }
    if (state.yearEnd==0){
      return state.articles.filter((element) => element.YearPublished >= state.yearStart)
    }
    return state.articles.filter((element) => element.YearPublished >= state.yearStart && element.YearPublished<=state.yearEnd)
  },
  SearchString: (state) => state.SearchString,
  Field: (state) => state.Field,
  NumberofArticles: (state) => state.articles.length,
  yearStart: (state) => state.yearStart,
}

const actions = {
  async getArticles({ commit }) {
    await http
      .get(
        'articles/' +
          state.Field +
          '?' +
          Endings[state.Field] +
          '=' +
          state.SearchString,
      )
      .then((response) => {
        commit('SET_ARTICLES', response.data)
      })
  },
  clearAll({ commit }) {
    commit('CLEAR_ALL')
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
    console.log(Field)
  },
  updateYear(state, year) {
    console.log(year)
    state.yearStart = year
    state.custom = false
  },
  updateCustom(state, year) {
    state.yearStart = year[0]
    state.yearEnd = year[1]
    state.custom = true
  },
  CLEAR_ALL(state) {
    state.SearchString = ''
    state.articles = []
  },
}

export default createStore({
  state,
  getters,
  actions,
  mutations,
})
