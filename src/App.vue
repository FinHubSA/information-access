<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Footer,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.Footer {
  align-self: flex-end;
}
</style>
