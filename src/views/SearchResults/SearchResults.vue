<template>
  <div>
    <div class="container">
      <h1>Search Results</h1>
      <p>
        Short description of what you are looking at, the search term, and
        possibly a summary bar.
      </p>
    </div>
    <div class="flex-container">
      <div class="vertical-flex-container">
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
      <div class="vertical-flex-container">
        <div
          class="placeholder-result-boxes"
          v-for="item in ArticlesSinceYear"
          :key="item"
        >
          {{ item.Title }}
          {{ item.YearPublished }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchResults',
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
  mounted() {
    this.$store.dispatch('getArticles')
  },
}
</script>

<style scoped>
.container {
  flex-grow: 1;
  flex-shrink: 0;
}
.flex-container {
  display: flex;
  padding: 1rem 5%;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
}
.vertical-flex-container {
  display: flex;
  flex-direction: column;
  padding: 1rem 5%;
}
.boxes {
  border: 2px black;
  border-style: solid;
}
.placeholder-result-boxes {
  border: 0px white;
  border-style: solid;
  border-radius: 15px;
  width: 400px;
  height: 50px;
  color: blue;
  background-color: white;
  padding: 1rem;
  margin: 1rem;
}
.option-select {
  padding: 1rem;
}
.selected-option {
  color: darkorange;
}
</style>
