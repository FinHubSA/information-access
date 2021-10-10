<template>
  <div>
    <div class="alignment">
      <i class="toggle fa fa-bars" @click="drawerVisible = true"></i>
    </div>
    <div class="right-drawer" v-if="drawerVisible">
      <div class="alignment">
        <button class="close" @click="drawerVisible = false">&#9587;</button>
      </div>
      <ul class="links-container">
        <router-link
          class="routerLink"
          to="/"
          v-if="currentRouteName"
          v-on:click="clearSearch"
          ><h2>Home</h2></router-link
        >
        <router-link class="routerLink" to="/About"><h2>About</h2></router-link>
        <router-link class="routerLink" to="/FAQ"><h2>FAQ</h2></router-link>
      </ul>
    </div>
    <div
      class="drawer-mask"
      v-if="drawerVisible"
      @click="drawerVisible = false"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawerVisible: false,
    }
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
h2 {
  font-weight: 400;
  color: black;
}
.toggle {
  width: 40px;
  background: white;
  color: black;
  border: 0;
  padding: 5px;
  cursor: pointer;
  font-size: 0.8cm;
}
.close {
  background: white;
  border: 0;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  margin-top: 2rem;
}
.right-drawer {
  width: 350px;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  height: 100vh;
  padding-left: 0;
  background: white;
  z-index: 200;
  transition: all 0.2s;
}
.drawer-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: 0.3;
  z-index: 199;
  transition: opacity 0.2s;
}
.routerLink {
  text-decoration: none;
}
.links-container {
  margin-top: 40px;
  text-align: left;
}
.alignment {
  text-align: right;
}
@media screen and (max-width: 900px) {
  nav {
    display: flex;
    flex-direction: column;
  }
  .right-drawer {
    width: 100vw;
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
    height: 100vh;
    padding-left: 0;
    border-left: 1px solid whitesmoke;
    background: white;
    z-index: 200;
    transition: all 0.2s;
  }
  .alignment {
    text-align: left;
  }
}
</style>
