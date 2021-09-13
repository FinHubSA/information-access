<template>
  <div class="container">
    <img class="logo" alt="Vue logo" src="../assets/logo_green.png" />
    <search-bar />
  </div>
</template>
<script>
import SearchBar from './SearchBar.vue'
export default {
  name: 'HomePage',
  props: {
    Search: String,
  },
  components: {
    SearchBar,
  },
}
</script>
<style scoped>
.logo {
  align-self: center;
}
.container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding-top: 2rem;
}
</style>
