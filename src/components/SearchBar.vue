<template>
  <div class="input-icons">
    <input id="search" type="text" placeholder="Search" />
    <i class="fa fa-search icon"></i>
  </div>
</template>
<script>
export default {
  name: 'SearchBar',
  props: {
    Search: String,
  },
}
</script>
<style scoped>
#search {
  height: 30px;
  width: 90%;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.151);
  border-radius: 30px;
  padding-left: 15px;
}
#search:focus {
  box-shadow: 1px 1px 5px grey;
  outline: none;
}
#search:hover {
  box-shadow: 1px 1px 5px grey;
}

.input-icons {
  width: 50%;
  margin-bottom: 10px;
  position: relative;
  align-self: center;
  height: 30px;
}

i {
  position: absolute;
  padding-top: 10px;
  min-width: 40px;
  right: 30px;
}
</style>
