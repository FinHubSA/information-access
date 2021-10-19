<template>
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
</template>
<script>
export default {
  name: 'Options',
  data() {
    return {
      year: 0,
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
      this.$store.state.active = true
      this.$store.state.custom = true
    },
    closeMenu(year) {
      this.$store.commit('updateYear', year)
      this.startYear=''
      this.endYear=''
    },
    go() {
      if (this.startYear > this.endYear) {
        return false
      }
      if (this.startYear < 1000 || this.startYear < 1000) {
        return false
      } else {
        this.$store.commit('updateCustom', [this.startYear, this.endYear])
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
</style>
