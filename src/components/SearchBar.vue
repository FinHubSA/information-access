<template>
  <div class="wrapper">
    <div class="input-container">
      <input class="search" type="text" placeholder="Search" />
      <i class="fa fa-search icon"></i>
    </div>
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
.wrapper {
  display: flex;
  width: 100vw;
  justify-content: space-around;
}
.input-container:hover {
  cursor: pointer;
  box-shadow: 1px 1px 5px grey;
}
.input-container:focus {
  box-shadow: 1px 1px 5px grey;
}
.input-container {
  display: flex;
  justify-content: space-between;
  height: 32px;
  border: 1px solid rgba(0, 0, 0, 0.151);
  border-radius: 30px;
  flex: 0 5 600px;
  min-width: 250px;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 2rem;
}
.input-container > input {
  flex-grow: 8;
  border: none;
  outline: none;
  margin-left: 10px;
  border-radius: 30px;
}
i {
  padding-top: 8px;
  min-width: 40px;
}
</style>
