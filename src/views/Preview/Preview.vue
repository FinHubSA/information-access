<template>
  <div class="welcome">
    <h3>
      This is a preview of {{ $route.params.title }} by
      {{ $route.params.authorinitial }}. {{ $route.params.authorsurname }}.
    </h3>
    <p>
      This is the URL of the document:
      <a :href="$route.params.url"> {{ $route.params.url }} </a>
    </p>
    <div class="container">
      <iframe class="iframe" :src="$route.params.url">
        Sorry, your browser does not support Iframes.
      </iframe>
    </div>
  </div>
</template>

<style scoped>
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
</style>
