<template>
  <div class="result-card">
    <router-link
      :to="{
        name: 'Preview',
        params: {
          url: URL,
          title: Title,
          authorsurname: AuthorSurname,
          authorinitial: AuthorInitial,
          journalname: JournalName,
          previouspage: this.$route.query.page,
          from: String(this.$route.fullPath)
        },
      }"
    >
      <p class="title">{{ Title }}</p>
    </router-link>

    <p class="yearPublished">
      {{ AuthorInitial }}. {{ AuthorSurname }}, {{ YearPublished }},
      {{ JournalName }}
    </p>
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
    AuthorSurname: String,
    AuthorInitial: String,
    JournalName: String,
  },
  methods: {
    downloadPaper(Title) {
      axios({
        url: 'https://etd.ohiolink.edu/apexprod/rws_etd/send_file/send?accession=dayton1311087124&disposition=attachment',
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        var fileUrl = window.URL.createObjectURL(new Blob([response.data]))
        var fileLink = document.createElement('a')
        fileLink.href = fileUrl

        fileLink.setAttribute('download', Title + '.pdf')
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
  border-radius: 20px;
  width: 85%;
  background-color: white;
}
.title {
  color: blue;
  font-size: larger;
  text-align: left;
  padding-left: 10px;
  margin-bottom: 0px;
  padding-top: 5px;
  margin-top: 10px;
}
.yearPublished {
  color: green;
  text-align: left;
  padding-left: 10px;
  margin-top: 0px;
  margin-bottom: 5px;
  padding-bottom: 10px;
}
.description {
  color: grey;
  text-align: left;
  padding-left: 10px;
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
@media screen and (max-width: 900px) {
  .result-card {
    width: 100%;
  }
}
</style>
