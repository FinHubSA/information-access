<template>
  <div>
    <nav id="navbar">
      <NavBar />
    </nav>
    <router-view />
    <footer>
      <h1>Placeholder for footer</h1>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: { NavBar },
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
