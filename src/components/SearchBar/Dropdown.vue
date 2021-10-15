<template>
  <div class="menu-item">
    <p class="title" @click="isOpen = !isOpen">
      Year<i class="fa fa-chevron-down down"></i>
    </p>
    <div class="sub-menu" v-if="isOpen">
      <div
        v-for="(item, i) in years"
        :key="i"
        :class="[
          this.$store.getters.yearStart == item.value &&
          this.$store.state.custom != true
            ? 'selected-option'
            : 'selectable',
        ]"
        v-on:click="closeMenu(item.value)"
      >
        {{ item.title }}
      </div>
      <div
        v-bind:class="[
          this.$store.state.custom == true ? 'selected-option' : 'selectable',
        ]"
        v-on:click="showCustom()"
      >
        Custom range
      </div>
      <div v-if="this.$store.state.custom == true" class="custom">
        <input v-model="startYear" class="custom-year" /> to
        <input v-model="endYear" class="custom-year" />
        <button v-on:click="go()" class="go-button">Go</button>
      </div>
    </div>
  </div>
  <div class="drawer-mask" v-if="isOpen" @click="isOpen = false"></div>
</template>
<script>
export default {
  name: 'Dropdown',
  data() {
    return {
      year: 0,
      isOpen: false,
      startYear: '',
      endYear: '',
      years: [
        {
          title: 'Any time',
          value: 0,
        },
        {
          title: 'Since 2021',
          value: 2021,
        },
        {
          title: 'Since 2020',
          value: 2020,
        },
        {
          title: 'Since 2017',
          value: 2017,
        },
      ],
    }
  },
  methods: {
    showCustom() {
      this.isOpen = true
      this.$store.state.custom = true
    },
    closeMenu(year) {
      this.$store.commit('updateYear', year)
      this.isOpen = false
    },
    go() {
      if (this.startYear > this.endYear) {
        return false
      }
      if (this.startYear < 1000 || this.startYear < 1000) {
        return false
      } else {
        this.$store.commit('updateCustom', [this.startYear, this.endYear])
        this.isOpen = false
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
.custom {
  display: flex;
  flex-direction: column;
  row-gap: 3px;
}
.go-button {
  width: 2rem;
}
.custom-year {
  width: 4rem;
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
.selected-option {
  color: darkorange;
  padding-top: 2px;
  padding-bottom: 2px;
}
.selectable {
  cursor: pointer;
  padding-top: 2px;
  padding-bottom: 2px;
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
