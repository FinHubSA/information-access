<template>
  <div>
    <nav>
      <div class="img-container">
        <router-link to="/" v-if="currentRouteName" v-on:click="clearSearch"
          ><img class="img-nav" src="@/assets/logo_green.png"
        /></router-link>
      </div>
      <div class="searchbar" v-if="currentRouteName">
        <search-bar />
      </div>
      <Drawer class="drawer" />
    </nav>
    <search-filter class="searchfilter" v-if="currentRouteName" />
    <status-bar v-if="currentRouteName" />
  </div>
</template>
<script>
import Drawer from '../Drawer/Drawer.vue'
import SearchBar from '../../components/SearchBar/SearchBar.vue'
import SearchFilter from '../../components/SearchBar/SearchFilter.vue'
import StatusBar from '../SearchBar/StatusBar.vue'
export default {
  components: {
    Drawer,
    SearchBar,
    SearchFilter,
    StatusBar,
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
.wrapper {
  justify-content: left;
}
.img-nav {
  height: 100px;
}
.img-container {
  flex: 2;
  height: 50px;
  order: 1;
}
.searchbar {
  flex: 2;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 0.5rem;
  order: 2;
  align-items: center;
  justify-content: center;
  padding-left: 4rem;
}
.searchfilter {
  padding-left: 15.5rem;
  margin: 0;
  justify-content: left;
}
.drawer {
  flex: 1;
  padding-top: 2rem;
  padding-bottom: 0.5rem;
  order: 3;
}
nav {
  margin: 0 10px;
  display: flex;

  align-items: center;
}
.routerLink {
  text-decoration: none;
}
@media screen and (max-width: 900px) {
  nav {
    display: flex;
  }
  .img-container {
    display: none;
    order: 3;
  }
  .searchbar {
    order: 2;
    padding-top: 0.5rem;
  }
  .drawer {
    order: 1;
    padding-top: 0.5rem;
  }
  .searchfilter {
    display: none;
  }
}
</style>
