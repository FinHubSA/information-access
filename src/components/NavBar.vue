<template>
  <nav>
    <div class="nav-container">
        <h6>
        <router-link to="/"
          ><img src="@/assets/logo_green.png"
        /></router-link>
        </h6>
        <ul class="links-container">


        <h6>
          <router-link to="/HelloWorld">HelloWorld</router-link>
        </h6>
        <h6>
          <router-link to="/SearchResults">SearchResults</router-link>
        </h6>
        <h6>
          <router-link to="/About">About</router-link>
        </h6>
        <h6>
          <router-link to="/FAQ">FAQ</router-link>
        </h6>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
img {
  height: 50px;
}
.nav-container {
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
