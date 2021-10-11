<template>
  <div class="container">
    <div class="flex-container">
      <div class="options-flex-container">
        <div class="option-select">
          <div
            v-bind:class="[year == 0 ? 'selected-option' : '']"
            v-on:click="year = 0"
          >
            All time
          </div>
          <div
            v-bind:class="[year == 2021 ? 'selected-option' : '']"
            v-on:click="year = 2021"
          >
            since 2021
          </div>
          <div
            v-bind:class="[year == 2020 ? 'selected-option' : '']"
            v-on:click="year = 2020"
          >
            since 2020
          </div>
          <div
            v-bind:class="[year == 2017 ? 'selected-option' : '']"
            v-on:click="year = 2017"
          >
            since 2017
          </div>
          <div>Custom range</div>
        </div>

        <div class="option-select">
          <div class="selected-option">Sort by journal</div>
          <div>Sort by date</div>
        </div>
      </div>
      <div class="results-cards-flex-container">
        <ResultCard
          v-for="item in ArticlesSinceYear.slice(numberOfCards * $route.params.Page - numberOfCards,numberOfCards * $route.params.Page)"
          :key="item"
          v-bind="item"
        />
      </div>
    </div>
  </div>
  <div class="change-page-container">
      <div> <router-link v-if="$route.params.Page>1" :to="{ name: 'SearchResults', params: { Page: ($route.params.Page -1), } }"> <img class="arrow" src="../../assets/leftarrow.png" > </router-link> </div>
      <div> <h2 class="page-number"> {{ $route.params.Page }} </h2> </div>
      <div> <router-link  v-if="$route.params.Page*numberOfCards < ArticlesSinceYear.length" :to="{ name: 'SearchResults', params: { Page: ($route.params.Page - (-1)), } }"> <img class="arrow" src="../../assets/rightarrow.png" > </router-link> </div>
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
      year: 0,
      numberOfCards: 2,
    }
  },
  computed: {
    ArticlesSinceYear() {
      if (this.year == 0) {
        return this.$store.getters.articles
      }
      return this.$store.getters.articlesSinceYear(this.year)
    },
  },
}
</script>
<style scoped>
.container {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
}
.flex-container {
  display: flex;
  flex-grow: 1;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
}
.options-flex-container {
  display: flex;
  flex-direction: column;
  padding: 1rem 5%;
  justify-content: flex-end;
}
.results-cards-flex-container {
  display: flex;
  flex-direction: column;
  padding: 1rem 5%;
  width: 80%;
}
.option-select {
  padding: 1rem;
  text-align: left;
}
.selected-option {
  color: darkorange;
}

.change-page-container {
  display: flex;
  background-color: lightgray;
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

.page-number{
  width: 25px;
  height: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 2%;
  margin-left: 2%;
}
</style>

