<template>
  <div class="header">
    <router-link
      class="routerLink"
      @click="this.$store.commit('updatePage', $route.params.previouspage)"
      :to="{
        name: 'SearchResults',
        params: { Page: $route.params.previouspage },
      }"
    >
      <div class="return">
        <img class="arrow" src="../../assets/leftarrow.png" />
        <p>
          Return to Results Page {{ $route.params.previouspage }}
        </p>
      </div>
    </router-link>
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

<style scoped>
.header {
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
}
.container {
  flex-grow: 1;
  flex-shrink: 0;
  background-color: grey;
  padding: 5% 0;
}

.welcome {
  flex-grow: 1;
  flex-shrink: 0;
  background-color: white;
}

.iframe {
  height: 1000px;
  width: 80%;
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
</style>
