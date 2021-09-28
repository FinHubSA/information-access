<template>
  <div class="input-container">
    <input class="search" type="text" v-model="SearchString" />
    <router-link to="/searchresults"
      ><i class="fa fa-search icon"></i>
    </router-link>
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
    /* checkForSearch() {
      this.SearchString=="" ? "/" : "/searchresults"
    }*/
  },
  props: {
    Search: String,
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
.routerLink {
  text-decoration: none;
}
</style>
