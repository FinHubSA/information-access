import { createStore } from 'vuex'
import axios from 'axios'

const Endings = {
  title: 'title',
  author: 'authorSurname',
  journal: 'journalName',
}

const http = axios.create({
  baseURL: 'https://api-aaronskit.org/api/',
  //baseURL: 'http://localhost:5000/',
  headers: {
    'Content-type': 'application/json',
  },
})

const state = {
  SearchString: '',
  Field: 'title',
  articles: [],
  yearStart: 0,
  yearEnd: 2021,
  custom: false,
  customStartYear: '',
  customEndYear: '',
  active: false,
  go: false,
  currentPage: 1,
}

const getters = {
  articles: (state) => state.articles,
  articlesSinceYear: (state) => {
    if (state.yearStart == 0) {
      return state.articles
    } else if (state.yearEnd == 0 && state.yearStart > 0) {
      return state.articles.filter(
        (element) => element.YearPublished >= state.yearStart,
      )
    } else {
      return state.articles.filter(
        (element) =>
          element.YearPublished >= state.yearStart &&
          element.YearPublished <= state.yearEnd,
      )
    }
  },
  SearchString: (state) => state.SearchString,
  Field: (state) => state.Field,
  NumberofArticles: (state) => {
    if (state.yearStart == 0) {
      return state.articles.length
    } else if (state.yearEnd == 0) {
      return state.articles.filter(
        (element) => element.YearPublished >= state.yearStart,
      ).length
    } else {
      return state.articles.filter(
        (element) =>
          element.YearPublished >= state.yearStart &&
          element.YearPublished <= state.yearEnd,
      ).length
    }
  },
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
  },
  updateYear(state, year) {
    state.yearStart = year
    state.yearEnd = 0
    state.active = false
    state.custom = false
    state.go = false
    state.customStartYear = ''
    state.customEndYear = ''
  },
  updateCustom(state, year) {
    state.yearStart = year[0]
    state.yearEnd = year[1]
    state.customStartYear = year[0]
    state.customEndYear = year[1]
    state.go = true
    state.active = false
  },
  CLEAR_ALL(state) {
    state.SearchString = ''
    state.articles = []
    state.Field = 'title'
  },
  updatePage(state, page) {
    state.currentPage = page
  },
}

export default createStore({
  state,
  getters,
  actions,
  mutations,
})
