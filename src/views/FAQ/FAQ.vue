<template>
  <div class="container">
    <h2>Frequently asked questions</h2>

    <button class="accordion" @click="displayPanel1 = !displayPanel1">
      How can I contribute?
    </button>
    <div class="panel" v-if="displayPanel1">
      <p>
        Text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </p>
    </div>

    <button class="accordion" @click="displayPanel2 = !displayPanel2">
      Section 2
    </button>
    <div class="panel" v-if="displayPanel2">
      <p>
        Text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </p>
    </div>

    <button class="accordion" @click="displayPanel3 = !displayPanel3">
      Section 3
    </button>
    <div class="panel" v-if="displayPanel3">
      <p>
        Text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      displayPanel1: false,
      displayPanel2: false,
      displayPanel3: false,
    }
  },
}
</script>

<style scoped>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: center;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active,
.accordion:hover {
  background-color: rgb(204, 204, 204);
}

.panel {
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
}

.container {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 5px;
  padding-left: 5%;
  padding-right: 5%;
}

.accordion:after {
  content: '\002B';
  color: #777;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}
</style>
