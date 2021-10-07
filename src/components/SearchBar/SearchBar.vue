<template>
  <div>
    <div class="wrapper">
      <div class="input-container">
        <input
          class="search"
          type="text"
          v-model="SearchString"
          v-on:keyup.enter="checkForSearch"
        />
        <router-link to="/searchresults" v-on:click="checkForSearch"
          ><i class="fa fa-search icon"></i>
        </router-link>
      </div>
    </div>
    <br />
    <div class="container">
      <p>Search on:</p>
      <div class="radio-container">
        <input
          class="radio"
          type="radio"
          id="author"
          value="author"
          v-model="Field"
        />
        <label for="author">Author Surname</label>
      </div>
      <div class="radio-container">
        <input
          class="radio"
          type="radio"
          id="title"
          value="title"
          v-model="Field"
        />
        <label for="title">Title</label>
      </div>
      <div class="radio-container">
        <input
          class="radio"
          type="radio"
          id="journal"
          value="journal"
          v-model="Field"
        />
        <label for="journal">Journal</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchBar',
  computed: {
    SearchString: {
      get() {
        return this.$store.getters.SearchString
      },
      set(value) {
        this.$store.commit('updateSearchString', value)
      },
    },
    Field: {
      get() {
        return this.$store.getters.Field
      },
      set(value) {
        this.$store.commit('updateField', value)
      },
    },
  },
  methods: {
    checkForSearch() {
      if (
        this.$store.getters.SearchString == '' &&
        this.$router.name !== 'SearchResults'
      ) {
        this.$router.push(this.$route)
      } else {
        this.$router.push('/searchresults')
        this.$store.dispatch('getArticles')
      }
    },
  },
  props: {
    Search: String,
  },
}
</script>
<style scoped>
.container,
.radio-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.radio-container {
  column-gap: 3px;
}
.container {
  column-gap: 1.5rem;
}
.input-container:hover {
  cursor: pointer;
  box-shadow: 1px 1px 5px grey;
}
.input-container:focus {
  box-shadow: 1px 1px 5px grey;
}
.input-container {
  display: flex;
  justify-content: space-between;
  height: 32px;
  border: 1px solid rgba(0, 0, 0, 0.151);
  border-radius: 30px;
  flex: 0 5 600px;
  min-width: 250px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 2rem;
}
.input-container > input {
  flex-grow: 5;
  border: none;
  outline: none;
  margin-left: 10px;
  border-radius: 30px;
}
i {
  padding-top: 8px;
  min-width: 40px;
  color: black;
}
label {
  vertical-align: baseline;
}
.radio {
  width: 1rem;
  height: 1rem;
  padding: 0;
  margin: 0;
}
.routerLink {
  text-decoration: none;
}
.wrapper {
  display: flex;
  width: 80vw;
  justify-content: space-around;
}
</style>
