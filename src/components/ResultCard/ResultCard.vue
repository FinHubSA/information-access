<template>
  <div class="result-card">
    <p class="title">
      <a :href="URL"> {{ Title }} </a>
    </p>
    <p class="yearPublished">
      Author Placeholder, {{ YearPublished }}, Journal Placeholder
    </p>
    <div class="container">
      <p class="description">Description/excerpt placeholder</p>
      <router-link
        class="previewbutton"
        :to="{ name: 'Preview', params: { url: URL, title: Title } }"
      >
        <img class="previewbutton" src="../../assets/preview.jpg" />
      </router-link>
    </div>
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

.container {
  display: flex;
}

.previewbutton {
  width: 25px;
  height: 25px;
  margin-top: 10px;
  margin-bottom: 2%;
  margin-right: 2%;
  margin-left: auto;
  cursor: pointer;
}
</style>
