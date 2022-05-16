<template>
  <div class="container">
    <h2>Frequently asked questions</h2>

    <button class="accordion" @click="displayPanel1 = !displayPanel1">
      How can I contribute?
    </button>
    <div class="panel" v-if="displayPanel1">
      <p>
        Soon, you will be able to contribute to the cache of journal articles on
        Aaron's Kit by running an automated web-scraper tool which automatically
        downloads and uploads journal articles to Aaron's Kit. This software
        will be open-source and a link to install it will be published on this
        website. After installation, you can simply leave the program running to
        contribute to Aaron's Kit.
        <br />
        <br />
        <em
          >Note: institional or personal access to an online journal will be
          necessary to download journal articles via the program.</em
        >
      </p>
    </div>

    <button class="accordion" @click="displayPanel2 = !displayPanel2">
      How do I use the search function?
    </button>
    <div class="panel" v-if="displayPanel2">
      <p>
        Articles can be searched via three fields: by article title, an author's
        last name or the journal name. Currently, articles can only be searched
        on each of these fields separately. The default search field selected is
        'title'. To search by a author's last name or journal name please select
        the appropriate search field before hitting the search button.
      </p>
    </div>

    <button class="accordion" @click="displayPanel3 = !displayPanel3">
      What's next for Aaron's Kit?
    </button>
    <div class="panel" v-if="displayPanel3">
      <p>
        In order to be truly censorship resistant, Aaron's Kit is moving towards
        decentralizing both it's website and it's cache of journal acticles.
        Additionally, we will be looking to develop advanced filtering and
        search functionalities and streamline the contributions software to
        improve user experience. Stay tuned for more updates!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      displayPanel1: false,
      displayPanel2: false,
      displayPanel3: false,
    }
  },
}
</script>

<style scoped>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active,
.accordion:hover {
  background-color: rgb(204, 204, 204);
}

.panel {
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
  text-align: left;
}
.container {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 5px;
  padding-left: 5%;
  padding-right: 5%;
}

.accordion:after {
  content: '\002B';
  color: #777;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}
</style>
