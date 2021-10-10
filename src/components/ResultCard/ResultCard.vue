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
      <img
        class="downloadbutton"
        src="../../assets/download.png"
        @click="downloadPaper()"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ResultCard',
  props: {
    Title: String,
    YearPublished: Number,
    URL: String,
  },
  methods: {
    downloadPaper() {
      axios({
        url: 'https://etd.ohiolink.edu/apexprod/rws_etd/send_file/send?accession=dayton1311087124&disposition=attachment',
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        var fileUrl = window.URL.createObjectURL(new Blob([response.data]))
        var fileLink = document.createElement('a')
        fileLink.href = fileUrl

        fileLink.setAttribute('download', 'download.pdf')
        document.body.appendChild(fileLink)

        fileLink.click()
      })
    },
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

.downloadbutton {
  width: 25px;
  height: 25px;
  margin-top: 10px;
  margin-bottom: 2%;
  margin-right: 2%;
  margin-left: auto;
  cursor: pointer;
}
</style>
