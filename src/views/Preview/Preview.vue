<template>
  <div class="container">
    <div class="header">
      <div class="welcome">
        <p>
          {{ $route.params.title }} by {{ $route.params.authorinitial }}.
          {{ $route.params.authorsurname }}.
        </p>
      </div>
    </div>
    <iframe class="iframe" :src="$route.params.url">
      Sorry, your browser does not support Iframes.
    </iframe>
  </div>
</template>
<script>
export default {
  name: 'Preview',
  methods: {
    returnToPrevious() {
      this.$store.commit('updatePage', this.$route.params.previouspage)
      console.log(this.$route.params.from)
    },
  },
}
</script>
<style scoped>
.header {
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 500px;
  padding-top: 6rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: left;
}
.container {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  background-color: white;
  height: 500px;
}
.mobile {
  display: none;
}
.not-mobile {
  display: initial;
}
.welcome {
  background-color: white;
  align-items: left;
}
.iframe {
  display: flex;
  flex-direction: column;
  flex: 5;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 2%;
  margin-right: 2%;
  margin-left: 10%;
  cursor: pointer;
}

.routerLink {
  text-decoration: none;
  color: black;
}

@media screen and (max-width: 900px) {
  .mobile {
    display: initial;
  }
  .not-mobile {
    display: none;
  }
}
</style>
