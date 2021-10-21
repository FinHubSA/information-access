<template>
  <div class="menu-item">
    <p
      class="title"
      @click="this.$store.state.active = !this.$store.state.active"
    >
      Year<i class="fa fa-chevron-down down"></i>
    </p>
    <div class="sub-menu" v-if="this.$store.state.active">
      <Options />
    </div>
  </div>
  <div
    class="drawer-mask"
    v-if="this.$store.state.active"
    @click="UpdateState()"
  ></div>
</template>
<script>
import Options from './Options.vue'
export default {
  name: 'Dropdown',
  components: {
    Options,
  },
  methods: {
    UpdateState() {
      this.$store.state.active = false
      if (this.$store.state.custom == true && this.$store.state.go != true) {
        this.$store.commit('updateYear', this.$store.state.yearStart)
      }
    },
  },
}
</script>
<style scoped>
.down {
  font-size: 10px;
  font-weight: lighter;
}
.menu-item .down {
  width: 10px;
  margin-left: 10px;
  cursor: pointer;
}
.title {
  cursor: pointer;
}
.menu-item .sub-menu {
  position: absolute;
  background-color: white;
  top: 98px;
  transform: translateX(-40%);
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 3px;
  padding-bottom: 5px;
}
.sub-menu {
  text-align: left;
  box-shadow: 1px 1px 5px grey;
  z-index: 200;
}
.drawer-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  opacity: 0;
  z-index: 199;
}
</style>
