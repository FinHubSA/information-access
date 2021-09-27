<template>
  <div class="result-card">
    <p class="title">
      <a :href="URL"> {{ Title }} </a>
    </p>
    <p class="yearPublished">
      Author Placeholder, {{ YearPublished }}, Journal Placeholder
    </p>
    <p class="description">Description/excerpt placeholder</p>
  </div>
</template>

<script>
export default {
  name: 'ResultCard',
  props: {
    Title: String,
    YearPublished: Number,
    URL: String,
  },
}
</script>

<style lang="scss" scoped>
.result-card {
  border: 0px white;
  border-style: solid;
  border-radius: 15px;
  width: 100%;
  background-color: white;
  margin: 5px;
}

.title {
  color: blue;
  font-size: larger;
  text-align: left;
  padding-left: 5px;
  margin-bottom: 0px;
  margin-top: 10px;
}

.yearPublished {
  color: green;
  text-align: left;
  padding-left: 5px;
  margin-top: 0px;
  margin-bottom: 5px;
}

.description {
  color: grey;
  text-align: left;
  padding-left: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
