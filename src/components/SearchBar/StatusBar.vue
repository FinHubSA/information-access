<template>
  <div class="all-container">
    <div class="side-container">
      <router-link class="img-small" to="/" v-on:click="clearSearch">
        <img class="img-small" src="@/assets/logo_no_byline.png" />
      </router-link>
    </div>
    <div class="side-container1" v-if="currentRouteName">
      <h2>Articles</h2>
    </div>
    <div class="side-container2" v-if="currentRouteName">
      <span class="results-status"
        >{{ this.$store.getters.NumberofArticles }} results
      </span>
    </div>
    <div class="side-container4">
      <Dropdown />
    </div>
    <div class="side-container3">
      <p>Search on:</p>
      <select v-model="Field" class="dropdown">
        <option value="author">Author</option>
        <option value="title">Title</option>
        <option value="journal">Journal</option>
      </select>
    </div>
  </div>
</template>
<script>
import Dropdown from './Dropdown.vue'
export default {
  name: 'StatusBar',
  components: {
    Dropdown,
  },
  data() {
    return {
      active: false,
      Show: false,
    }
  },
  computed: {
    Field: {
      get() {
        return this.$store.getters.Field
      },
      set(value) {
        this.$store.commit('updateField', value)
      },
    },
    currentRouteName() {
      return this.$route.name == 'SearchResults'
    },
  },
  methods: {
    toggle() {
      this.active = !this.active
    },
    clearSearch() {
      this.$store.commit('updateSearchString', '')
      this.$store.commit('updateYear', 0)
    },
  },
}
</script>
<style scoped>
.results-status {
  color: grey;
  font-size: 14px;
}
.all-container {
  display: flex;
  height: 2.5rem;
  align-items: center;
  justify-content: left;
  background-color: white;
  border-top: 1px solid rgb(223, 223, 223);
  border-bottom: 1px solid rgb(223, 223, 223);
  padding: 0 10px;
  margin: 0;
}
.side-container,
.side-container3,
.side-container4 {
  display: none;
  flex: 1;
}
.side-container1 {
  display: initial;
  flex: 1;
  justify-content: left;
}
.side-container2 {
  display: initial;
  width: 10rem;
  padding-left: 0rem;
  flex: 5;
  text-align: left;
  margin-left: 2rem;
}
p {
  padding: 0;
  margin: 0;
}
@media screen and (max-width: 900px) {
  .all-container {
    justify-content: space-between;
  }
  .side-container1,
  .side-container2 {
    display: none;
  }
  .name {
    font-weight: bold;
  }
  .dropdown .side-container .side-container3 .img-small {
    display: initial;
  }
  .side-container,
  .side-container4 {
    display: flex;
    align-items: center;
  }
  .side-container4 {
    justify-content: flex-end;
    flex: 2;
  }
  .side-container3 {
    display: flex;
    flex: 3;
    align-items: center;
    justify-content: flex-end;
  }
  .img-small {
    visibility: visible;
    width: 4rem;
  }
  .dropdown {
    background-color: white;
    color: #2c3e50;
    height: 2.5rem;
    font-size: 16px;
    border: none;
    cursor: pointer;
    right: 0;
    padding-right: 2px;
    position: relative;
    display: inline-block;
  }

  option {
    color: #2c3e50;
    padding: 12px 16px;
    display: block;
    border: none;
  }
  .dropdown:focus {
    outline: 0;
  }
  .dropdown-content option:hover {
    background-color: #f1f1f1;
    border: none;
  }
  .dropdown:hover .dropdown-content {
    display: block;
    border: none;
  }
  .dropdown:hover .dropbtn {
    background-color: rgb(199, 198, 198);
  }
}
</style>
