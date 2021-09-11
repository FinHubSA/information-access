<template>
  <div class="container">
    <!--<router-link to="/">-->
    <img id="homelogo" alt="Vue logo" src="../assets/logo_green.png" />
    <!--</router-link>-->
    <search-bar />
  </div>
</template>
<script>
//since using router need to make a search component
console.log('Homepage loaded')
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  min-height: 100%;
  /*    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 250px 70px 70px 250px;
    grid-template-areas: 
    ". logo ."
    ". search ."
    ". flexbox ."
    ". google-text .";*/
}
#homelogo {
  justify-self: center;
  align-self: center;
  padding-bottom: 3%;
  padding-top: 10%;
}
</style>
