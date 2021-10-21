<template>
  <div class="header">
    <div class="welcome">
      <h3>
        This is a preview of {{ $route.params.title }} by
        {{ $route.params.authorinitial }}. {{ $route.params.authorsurname }}.
      </h3>
      <p>
        This is the URL of the document:
        <a :href="$route.params.url"> {{ $route.params.url }} </a>
      </p>
    </div>
  </div>
  <div class="container">
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
  justify-content: center;
}
.container {
  flex-grow: 1;
  flex-shrink: 0;
  background-color: grey;
}
.mobile {
  display: none;
}
.not-mobile {
  display: initial;
}
.welcome {
  background-color: white;
}
.iframe {
  height: 100%;
  min-height: 600px;
  width: 100%;
}

.return {
  display: flex;
  justify-content: left;
}

.arrow {
  width: 25px;
  height: 25px;
  margin-top: 20px;
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
