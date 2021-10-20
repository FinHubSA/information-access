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
          numberOfCards * $route.params.Page - numberOfCards,
          numberOfCards * $route.params.Page,
        )"
        :key="item"
        v-bind="item"
      />
    </div>
  </div>
  <div class="change-page-container">
    <div>
      <router-link
        v-if="$route.params.Page > 1"
        :to="{
          name: 'SearchResults',
          params: { Page: $route.params.Page - 1 },
        }"
      >
        <img class="arrow" src="../../assets/leftarrow.png" />
      </router-link>
      <div class="arrow" v-if="$route.params.Page == 1"></div>
    </div>
    <div>
      <h2 class="page-number">{{ $route.params.Page }}</h2>
    </div>
    <div>
      <router-link
        v-if="$route.params.Page * numberOfCards < ArticlesSinceYear.length"
        :to="{
          name: 'SearchResults',
          params: { Page: $route.params.Page - -1 },
        }"
      >
        <img class="arrow" src="../../assets/rightarrow.png" />
      </router-link>
      <div class="arrow" v-if="$route.params.Page != 1"></div>
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
      numberOfCards: 2,
    }
  },
  methods: {
    checkForSearch() {
      if (
        this.$store.getters.SearchString == '' &&
        this.$router.name !== 'SearchResults'
      ) {
        this.$router.push(this.$route)
      } else {
        this.$router.push({ name: 'SearchResults', params: { Page: 1 } })
        this.$store.commit('updateYear', 0)
        this.$store.dispatch('getArticles')
        console.log("called")
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
