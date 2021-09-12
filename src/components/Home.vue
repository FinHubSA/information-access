<template>
  <div class="container">
    <img id="homelogo" alt="Vue logo" src="../assets/logo_green.png" />
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
#main {
  min-height: 100%;
}
#homelogo {
  justify-self: center;
  align-self: center;
  padding-bottom: 3%;
  padding-top: 10%;
}
</style>
