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
    <input
      v-model="this.$store.state.customStartYear"
      v-on:keyup.enter="go"
      class="custom-year"
    />
    to
    <input
      v-model="this.$store.state.customEndYear"
      v-on:keyup.enter="go"
      class="custom-year"
    />
    <button v-on:click="go" class="go-button">Go</button>
  </div>
</template>
<script>
export default {
  name: 'Options',
  data() {
    return {
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
      this.$router.push({
        name: 'SearchResults',
        query: {
          q1: this.$store.getters.SearchString,
          type: this.$store.getters.Field,
          custom: false,
          yearStart: year,
          yearEnd: 0,
          page: 1,
        },
      })
    },
    go() {
      if (
        isNaN(this.$store.state.customStartYear) ||
        isNaN(this.$store.state.customEndYear)
      ) {
        alert('Years need to be numbers')
      } else if (
        this.$store.state.customStartYear > this.$store.state.customEndYear
      ) {
        alert('The start year must be less than or equal to the end year')
      } else if (
        this.$store.state.customStartYear < 0 ||
        this.$store.state.customEndYear < 0
      ) {
        alert('Years cannot be negative')
      } else {
        this.$store.commit('updateCustom', [
          this.$store.state.customStartYear,
          this.$store.state.customEndYear,
        ])
        this.$store.commit('updateSearchString', this.$route.query.q1)
        this.$router.push({
          name: 'SearchResults',
          query: {
            q1: this.$store.getters.SearchString,
            type: this.$store.getters.Field,
            custom: true,
            yearStart: this.$store.state.customStartYear,
            yearEnd: this.$store.state.customEndYear,
            page: 1,
          },
        })
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
