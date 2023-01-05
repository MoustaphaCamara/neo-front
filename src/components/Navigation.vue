<template>
  <div class="nav-container">
    <div class="links">
      <router-link to="/" class="link">
        <img src="" alt="logo" />
      </router-link>

      <router-link to="/connexion" class="link">
        <p>Connexion</p>
      </router-link>

      <router-link to="/registration" class="link">
        <p>Inscription</p>
      </router-link>
    </div>
    <router-view></router-view>

    <!-- Afficher la navigation (router-view) -->
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped></style>
