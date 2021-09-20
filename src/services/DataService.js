import { createStore } from 'vuex'
import axios from 'axios'


const http = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-type': 'application/json',
  },
})

//to handle state
const state = {
  SearchString: '',
  articles: [1, 2, 3],
}

//to handle state
const getters = {
    articles: state => state.articles,
    articlesSinceYear: (state) => (year) => {
        return state.articles.filter((element) => element.YearPublished>=year)
    }
}

//to handle actions
const actions = {
  getArticles({ commit }) {
    http.get('/articles').then((response) => {
      commit('SET_ARTICLES', response.data)
    })
  },
}

//to handle mutations
const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
}

//export store module
export default createStore({
  state,
  getters,
  actions,
  mutations,
})

/** we have just created a boiler plate for our vuex store module**/
