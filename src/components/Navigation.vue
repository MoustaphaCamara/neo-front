<template>
  <div class="nav-container">
    <div class="links">
      <router-link to="/" class="link logo">
        <img src="https://i.ibb.co/JrhTCp2/logo-neosettlers.png" alt="logo" />
      </router-link>

      <router-link to="/connexion" class="link">
        <p>Connexion</p>
      </router-link>

      <router-link to="/registration" class="link">
        <p>Inscription</p>
      </router-link>
    </div>
    <!-- Afficher la navigation (router-view) -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
.logo img {
  width: 150px;
}
.link {
  text-decoration: none;
}
/* quand on est sur une page : router-link-active */
.router-link-active {
  font-size: 1.5rem;
  font-weight: bolder;
}
</style>
