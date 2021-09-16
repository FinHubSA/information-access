<template>
  <div class="container">
    <img class="logo" alt="Vue logo" src="../../assets/logo_green.png" />
    <div class="wrapper">
      <search-bar />
    </div>
  </div>
</template>
<script>
import SearchBar from '../../components/SearchBar/SearchBar.vue'
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
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding-top: 2rem;
}
.wrapper {
  display: flex;
  width: 100vw;
  justify-content: space-around;
}
img {
  height: 250px;
}
</style>
