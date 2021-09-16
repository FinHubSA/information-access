<template>
  <div id="app">
    <Drawer />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Drawer from './components/Drawer/Drawer.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'app',
  components: {
    Drawer,
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
</style>
