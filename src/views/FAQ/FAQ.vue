<template>
  <div class="container">
    <h2>Frequently asked questions</h2>

    <button class="accordion" @click= "openAccordion1()">How can I contribute?</button>
    <div class="panel" id="panel1">
      <p>
        Text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </p>
    </div>

    <button class="accordion" @click= "openAccordion2()">Section 2</button>
    <div class="panel" id="panel2">
      <p>
        Text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </p>
    </div>

    <button class="accordion" @click= "openAccordion3()">Section 3</button>
    <div class="panel" id="panel3">
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

  methods: {
    openAccordion1() {
      var panel = document.getElementById("panel1");
      if (panel.style.display == "block") {
        panel.style.maxHeight = null
        panel.style.display = "none"
      } else {
        panel.style.display = "block"
        panel.style.maxHeight = panel.scrollHeight + 'px'
      }
    },

    openAccordion2() {
      var panel = document.getElementById("panel2");
      if (panel.style.display == "block") {
        panel.style.maxHeight = null
        panel.style.display = "none"
      } else {
        panel.style.display = "block"
        panel.style.maxHeight = panel.scrollHeight + 'px'
      }
    },

    openAccordion3() {
      var panel = document.getElementById("panel3");
      if (panel.style.display == "block") {
        panel.style.maxHeight = null
        panel.style.display = "none"
      } else {
        panel.style.display = "block"
        panel.style.maxHeight = panel.scrollHeight + 'px'
      }
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
  background-color: #ccc;
}

.panel {
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
  display: "block";
}

#panel1 {
  display: none;
}

#panel2 {
  display: none;
}

#panel3 {
  display: none;
}

.container {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 5px;
}
</style>
