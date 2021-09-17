<template>
  <nav>
    <div class="nav-container">
      <h6>
        <router-link to="/"><img src="@/assets/logo_green.png" /></router-link>
      </h6>
      <search-bar />
      <Drawer />
    </div>
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
}
</script>

<style scoped>
img {
  height: 50px;
}
.nav-container {
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.routerLink {
  text-decoration: none;
}
</style>
