<template>
  <div class="container">
    <router-link to="/">
      <img class="logo" alt="Vue logo" src="../../assets/logo_green.png" />
    </router-link>
    <div class="wrapper">
      <search-bar />
    </div>
    <br />
    <div class="searchfilter">
      <search-filter />
    </div>
  </div>
</template>
<script>
import SearchBar from '../../components/SearchBar/SearchBar.vue'
import SearchFilter from '../../components/SearchBar/SearchFilter.vue'
export default {
  name: 'HomePage',
  props: {
    Search: String,
  },
  components: {
    SearchBar,
    SearchFilter,
  },
}
</script>
<style scoped>
.logo {
  align-self: center;
}
.container {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding-top: 2rem;
}
img {
  height: 250px;
}
.wrapper {
  justify-content: center;
}
.searchfilter {
  justify-self: baseline;
}
@media screen and (max-width: 900px) {
  img {
    height: 180px;
  }
}
</style>
