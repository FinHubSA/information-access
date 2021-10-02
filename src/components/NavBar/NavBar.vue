<template>
  <nav>
    <h6 class="img-container">
      <router-link to="/" v-if="currentRouteName" v-on:click="clearSearch"
        ><img src="@/assets/logo_green.png"
      /></router-link>
    </h6>
    <search-bar v-if="currentRouteName" />
    <Drawer />
  </nav>
</template>

<script>
import Drawer from '../Drawer/Drawer.vue'
import SearchBar from '../../components/SearchBar/SearchBar.vue'
export default {
  components: {
    Drawer,
    SearchBar,
  },
  computed: {
    currentRouteName() {
      return this.$route.name != 'HomePage'
    },
  },
  methods: {
    clearSearch() {
      this.$store.commit('updateSearchString', '')
    },
  },
}
</script>
<style scoped>
img {
  height: 80px;
}
.img-container {
  height: 50px;
}
nav {
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.routerLink {
  text-decoration: none;
}
</style>
