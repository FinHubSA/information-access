<template>
  <div class="all-container">
    <div class="side-container">
      <img class="img-small" src="@/assets/logo_no_byline.png" />
    </div>
    <div class="side-container1">
      <h2>Articles</h2>
    </div>
    <div class="side-container2">
      <p class="results-status">
        About {{ this.$store.getters.NumberofArticles }} results
      </p>
    </div>
    <div class="side-container3">
      <p>Search on:</p>
      <select v-model="Field" class="dropdown">
        <option value="author">Author</option>
        <option value="title">Title</option>
        <option value="journal">Journal</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StatusBar',
  data() {
    return {
      active: false,
    }
  },
  computed: {
    Field: {
      get() {
        return this.$store.getters.Field
      },
      set(value) {
        this.$store.commit('updateField', value)
      },
    },
  },
  method: {
    toggle() {
      this.active = !this.active
    },
  },
}
</script>
<style scoped>
.dropdown {
  display: none;
}
.results-status {
  color: grey;
  font-size: 14px;
}
.all-container {
  display: flex;
  width: 100vw;
  column-gap: 8rem;
  height: 2.5rem;
  align-items: center;
  background-color: white;
  border-top: 1px solid rgb(223, 223, 223);
  border-bottom: 1px solid rgb(223, 223, 223);
}
.side-container {
  display: none;
}
.side-container1 {
  display: initial;
  padding-left: 2rem;
}
.side-container2 {
  display: initial;
  padding-left: 0rem;
}
.side-container3 {
  display: none;
}
@media screen and (max-width: 900px) {
  .all-container {
    justify-content: space-between;
  }
  .side-container1 {
    display: none;
  }
  .side-container2 {
    display: none;
  }
  .name {
    font-weight: bold;
  }
  .dropdown .side-container .side-container3 .img-small {
    display: initial;
  }
  .side-container,
  .side-container3 {
    display: flex;
    align-items: center;
  }
  .img-small {
    visibility: visible;
    width: 4rem;
  }
  .dropdown {
    background-color: white;
    color: rgb(34, 34, 34);
    height: 2.5rem;
    font-size: 16px;
    border: none;
    cursor: pointer;
    right: 0;
    padding-right: 2px;
    position: relative;
    display: inline-block;
  }

  option {
    color: black;
    padding: 12px 16px;
    display: block;
    border: none;
  }
  .dropdown:focus {
    outline: 0;
  }
  .dropdown-content option:hover {
    background-color: #f1f1f1;
    border: none;
  }
  .dropdown:hover .dropdown-content {
    display: block;
    border: none;
  }
  .dropdown:hover .dropbtn {
    background-color: rgb(199, 198, 198);
  }
}
</style>
