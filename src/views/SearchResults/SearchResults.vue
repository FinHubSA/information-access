<template>
  <div class="container">
   <!-- <div class="container">
      <p>Status bar placeholder</p>
    </div>-->
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
          v-for="item in ArticlesSinceYear"
          :key="item"
          v-bind="item"
        />
      </div>
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
  data() {
    return {
      articles: [],
      year: 0,
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
}
.flex-container {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
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
</style>
