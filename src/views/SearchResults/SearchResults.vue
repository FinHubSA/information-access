<template>
  <div class="container">
    <div class="options-flex-container">
      <div class="option-select">
        <div
          v-bind:class="[this.$store.getters.yearStart == 0 && this.$store.state.custom !=true  ? 'selected-option' : 'selectable']"
          v-on:click="updateYear(0)"
        >
          All time
        </div>
        <div
          v-bind:class="[this.$store.getters.yearStart == 2021 && this.$store.state.custom !=true  ? 'selected-option' : 'selectable']"
          v-on:click="updateYear(2021)"
        >
          since 2021
        </div>
        <div
          v-bind:class="[this.$store.getters.yearStart == 2020 && this.$store.state.custom !=true ? 'selected-option' : 'selectable']"
          v-on:click="updateYear(2020)"
        >
          since 2020
        </div>
        <div
          v-bind:class="[this.$store.getters.yearStart == 2017 && this.$store.state.custom !=true ? 'selected-option' : 'selectable']"
          v-on:click="updateYear(2017)"
        >
          since 2017
        </div>
        <div
          v-bind:class="[this.$store.state.custom ==true ? 'selected-option' : 'selectable']"
          v-on:click="this.$store.state.custom=true"
        >
          Custom range
        </div>
      <div v-if="this.$store.state.custom == true" class="custom"><input v-model="startYear" class="custom-year" /> to <input v-model="endYear" class="custom-year" /> <button v-on:click="go()" class="go-button">Go</button></div>
      </div>
    </div>
    <div class="results-cards-flex-container">
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
export default {
  name: 'SearchResults',
  components: {
    ResultCard,
  },
  props: {
    Page: Number,
  },
  data() {
    return {
      articles: [],
      startYear: 0,
      endYear: 0,
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
        this.$store.dispatch('getArticles')
      }
    },
    updateYear(year) {
      this.$store.commit('updateYear', year)
    },
    go(){
      if (this.startYear>this.endYear){
        return false
      }
      if (this.startYear <1000 || this.startYear <1000){
        return false
      }
      else {
        this.$store.commit('updateCustom', [this.startYear, this.endYear])
      }
    }
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
.custom {
  display: flex;
  flex-direction: column;
  row-gap: 3px;
}
.go-button {
  width: 2rem;
}
.custom-year {
  width: 4rem;
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
.selected-option {
  color: darkorange;
}
.selectable {
  cursor: pointer;
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
}
</style>
