<template>
  <div>
    <nav id="navbar">
      <h1>Placeholder for navbar</h1>
    </nav>
    <home-page />
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
    HomePage,
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
