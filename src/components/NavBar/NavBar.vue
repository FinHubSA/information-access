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
    <div class="searchfilter-container">
      <div class="placeholder"/>
      <search-filter class="searchfilter" v-if="currentRouteName" />
    </div>
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
.input-container {
  justify-content: left;
}
.img-nav {
  height: 100px;
}
.img-container {
  flex: 1;
  height: 50px;
  order: 1;
}
.placeholder {
  flex: 1;
}
.searchbar {
  flex: 4;
  display: flex;
  order: 2;
  padding-top: 2rem;
  padding-bottom: 0.5rem;
  padding-left: 0rem;
  align-items: center;
  justify-content: left;
  width: 80vw;
}
.searchfilter-container {
  display: flex;
  margin: 0 10px;
  justify-items: normal;
}
.searchfilter {
  flex: 5;
  margin-left: 2rem;
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
  justify-items: normal;
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
    flex: 4;
    display: flex;
    order: 2;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0rem;
    align-items: center;
    justify-content: left;
    width: 80vw;
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
