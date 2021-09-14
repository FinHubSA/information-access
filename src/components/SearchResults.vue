<template>
  <div>
    <h1>Search Results</h1>
    <p>
      Short description of what you are looking at, the search term, and
      possibly a summary bar.
    </p>
  </div>
  <div class="flex-container">
    <div class="vertical-flex-container">
      <div class="option-select">
        <div class="selected-option">All time</div>
        <div>Since 2021</div>
        <div>Since 2020</div>
        <div>Since 2017</div>
        <div>Custom range</div>
      </div>

      <div class="option-select">
        <div class="selected-option">Sort by journal</div>
        <div>Sort by date</div>
      </div>
    </div>

    <div class="vertical-flex-container">
      <div class="placeholder-result-boxes">Result 1</div>
      <div class="placeholder-result-boxes">Result 2</div>
      <div class="placeholder-result-boxes">Result 3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',
}
</script>

<style scoped>
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
