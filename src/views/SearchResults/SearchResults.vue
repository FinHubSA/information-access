<template>
  <div class="container">
    <div class="options-flex-container">
      <div class="option-select">
        <Options />
      </div>
    </div>
    <div class="results-cards-flex-container">
      <h3 v-if="this.$store.state.yearStart == 0" class="temp">
        {{ this.$store.getters.NumberofArticles }} result(s) searching on
        {{ this.$store.getters.Field }} for all time
      </h3>
      <h3
        v-if="this.$store.state.yearStart != 0 && this.$store.state.go == false"
        class="temp"
      >
        {{ this.$store.getters.NumberofArticles }} result(s) searching on
        {{ this.$store.getters.Field }} filtering for articles published since
        {{ this.$store.state.yearStart }}
      </h3>
      <h3
        v-if="this.$store.state.custom == true && this.$store.state.go == true"
        class="temp"
      >
        {{ this.$store.getters.NumberofArticles }} result(s) searching on
        {{ this.$store.getters.Field }} filtering between
        {{ this.$store.state.yearStart }} and {{ this.$store.state.yearEnd }}
      </h3>
      <ResultCard
        v-for="item in ArticlesSinceYear.slice(
          numberOfCards * this.$store.state.currentPage - numberOfCards,
          numberOfCards * this.$store.state.currentPage,
        )"
        :key="item"
        v-bind="item"
      />
    </div>
  </div>
  <div class="change-page-container">
    <div>
      <router-link
        v-if="this.$store.state.currentPage > 1"
        @click="this.$store.commit('updatePage', this.$route.query.page - 1)"
        :to="{
          name: 'SearchResults',
          query: {
            q1: this.$store.getters.SearchString,
            type: this.$store.getters.Field,
            custom: this.$store.state.custom,
            yearStart: this.$store.state.yearStart,
            yearEnd: this.$store.state.yearEnd,
            page: this.$route.query.page - 1,
          },
        }"
      >
        <img class="arrow" src="../../assets/leftarrow.png" />
      </router-link>
      <div class="arrow" v-if="this.$store.state.currentPage == 1"></div>
    </div>
    <div>
      <h2 class="page-number">{{ this.$store.state.currentPage }}</h2>
    </div>
    <div>
      <router-link
        v-if="
          this.$store.state.currentPage * numberOfCards <
          ArticlesSinceYear.length
        "
        @click="
          this.$store.commit('updatePage', this.$store.state.currentPage - -1)
        "
        :to="{
          name: 'SearchResults',
          query: {
            q1: this.$store.getters.SearchString,
            type: this.$store.getters.Field,
            custom: this.$store.state.custom,
            yearStart: this.$store.state.yearStart,
            yearEnd: this.$store.state.yearEnd,
            page: this.$store.state.currentPage - -1,
          },
        }"
      >
        <img class="arrow" src="../../assets/rightarrow.png" />
      </router-link>
      <div
        class="arrow"
        v-if="
          this.$store.state.currentPage * numberOfCards >
          ArticlesSinceYear.length
        "
      ></div>
    </div>
  </div>
</template>
<script>
import ResultCard from '../../components/ResultCard/ResultCard.vue'
import Options from '../../components/SearchBar/Options.vue'
export default {
  name: 'SearchResults',
  components: {
    ResultCard,
    Options,
  },
  props: {
    Page: Number,
  },
  data() {
    return {
      articles: [],
      numberOfCards: 8,
    }
  },
  methods: {
    checkForSearch() {
      if (this.$route.query.q1 == null) {
        this.$router.push({ name: 'HomePage' })
      } else if (
        this.$route.name == 'SearchResults' &&
        this.$store.getters.SearchString == ''
      ) {
        this.$store.commit('updateSearchString', this.$route.query.q1)
        this.$store.commit('updateField', this.$route.query.type)
        this.$store.commit('updatePage', this.$route.query.page)
        if (this.$route.query.custom == 'true') {
          this.$store.state.custom = true
          this.$store.commit('updateCustom', [
            this.$route.query.yearStart,
            this.$route.query.yearEnd,
          ])
        } else {
          this.$store.state.custom = false
          this.$store.commit('updateYear', this.$route.query.yearStart)
        }
        this.$router.push({
          name: 'SearchResults',
          query: {
            q1: this.$store.getters.SearchString,
            type: this.$store.getters.Field,
            custom: this.$store.state.custom,
            yearStart: this.$store.state.yearStart,
            yearEnd: this.$store.state.yearEnd,
            page: this.$store.state.currentPage,
          },
        })
        this.$store.dispatch('getArticles')
      } else {
        this.$store.commit('updateYear', 0)
        this.$store.commit('updatePage', 1)
        this.$router.push({
          name: 'SearchResults',
          query: {
            q1: this.$store.getters.SearchString,
            type: this.$store.getters.Field,
            custom: this.$store.state.custom,
            yearStart: this.$store.state.yearStart,
            yearEnd: 2021,
            page: 1,
          },
        })
        this.$store.dispatch('getArticles')
      }
    },
  },
  computed: {
    ArticlesSinceYear() {
      return this.$store.getters.articlesSinceYear
    },
  },
  mounted() {
    this.checkForSearch()
  },
}
</script>
<style scoped>
.temp {
  display: none;
}
.custom {
  display: flex;
  flex-direction: column;
  row-gap: 3px;
}
.container {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  background-color: #eee;
  padding-top: 2rem;
  padding-left: 10px;
  padding-right: 10px;
}
.options-flex-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.results-cards-flex-container {
  display: flex;
  flex-direction: column;
  flex: 5;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 1rem;
  padding-left: 16px;
}
.option-select {
  padding: 1rem;
  text-align: left;
}
.change-page-container {
  display: flex;
  background-color: #eee;
  flex-direction: row;
  justify-content: center;
}
.arrow {
  width: 25px;
  height: 25px;
  margin-top: 10px;
  margin-bottom: 2%;
  margin-right: 2%;
  margin-left: 2%;
  cursor: pointer;
}
.page-number {
  width: 25px;
  height: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 2%;
  margin-left: 2%;
}
@media screen and (max-width: 900px) {
  .results-cards-flex-container {
    padding-right: 16px;
  }
  .options-flex-container {
    display: none;
  }
  .temp {
    display: initial;
    padding-left: 16px;
  }
}
</style>
