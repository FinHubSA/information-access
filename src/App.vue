<template>
  <div>
    <nav id="navbar">
      <h1>Placeholder for navbar</h1>
      <!--possible approach: use same navbar for homepage as others and hide search bar when detected as home route-->
    </nav>
    <div id="main">
      <!--<router-view />-->
      <home-page/>
    </div>
    <footer>
      <h1>Placeholder for footer</h1>
    </footer>
  </div>
</template>

<script>
import HomePage from './components/Home.vue'

export default {
  name: 'app',
  components: {
    HomePage
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
