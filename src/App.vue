<script setup></script>

<template>
  <div>
    <!-- nos liens de navigation  -->
    <router-link to="/">
      <p>Accueil</p>
    </router-link>
    <router-link to="/fred">
      <p>Frédéric</p>
    </router-link>
    <!-- Afficher la navigation (router-view) -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
