<template>
  <div class="all-container">
    <div class="side-container">
      <img class="img-small" src="@/assets/logo_icon.png" />
      <p class="name"> Aaron's Kit</p>
    </div>
    <select v-model="Field" class="dropdown">
      <option value="author">Author</option>
      <option value="title">Title</option>
      <option value="journal">Journal</option>
    </select>
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

.all-container {
  display: flex;
  width: 100vw;
  height: 2.5rem;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-top: 1px solid rgb(223, 223, 223);
  border-bottom: 1px solid rgb(223, 223, 223);
}
.side-container {
  display: none;
}
@media screen and (max-width: 900px) {
  .name {
    font-weight: bold;
  }
  .dropdown .side-container .img-small {
    display: initial;
  }
  .side-container{
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
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content option {
    color: black;
    padding: 12px 16px;
    display: block;
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
