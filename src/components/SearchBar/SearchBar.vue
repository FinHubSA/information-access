<template>
  <div class="input-container">
    <input
      class="search"
      type="text"
      v-model="SearchString"
      v-on:keyup.enter="checkForSearch"
    />
    <i class="fa fa-search icon" v-on:click="checkForSearch"></i>
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
  },
  methods: {
    checkForSearch() {
      if (
        this.$store.getters.SearchString == '' &&
        this.$router.name !== 'SearchResults'
      ) {
        this.$router.push(this.$route)
      } else if (
        this.$router.name == 'SearchResults' &&
        this.$store.getters.SearchString == ''
      ) {
        this.$store.commit('updateSearchString', this.$route.query.q1)
        this.$store.commit('updateField', this.$route.query.type)
        this.$router.push({
          name: 'SearchResults',
          query: {
            q1: this.$store.getters.SearchString,
            type: this.$store.getters.Field,
            page: this.$route.query.page,
          },
        })
        this.$store.commit('updateYear', 0)
        this.$store.dispatch('getArticles')
      } else {
        console.log(this.$store.getters.Field)
        this.$router.push({
          name: 'SearchResults',
          query: {
            q1: this.$store.getters.SearchString,
            type: this.$store.getters.Field,
            custom: false,
            yearStart: 0,
            yearEnd: 2021,
            page: 1,
          },
        })
        this.$store.commit('updateYear', 0)
        this.$store.dispatch('getArticles')
      }
    },
  },
}
</script>
<style scoped>
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
.routerLink {
  text-decoration: none;
}
.wrapper {
  display: flex;
  width: 80vw;
  justify-content: center;
}
</style>
