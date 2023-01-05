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
      <!-- candidat et agency seront cachés une fois le développement des fonctionnalités fait, là c'est pour naviguer tranquillement.. :) -->
      <!-- candidat -->
      <router-link to="/candidate/home" class="link">
        <p>accueil candidat</p>
      </router-link>
      <router-link to="/candidate/profile" class="link">
        <p>profile candidat</p>
      </router-link>
      <!-- agence -->
      <router-link to="/agency/home" class="link">
        <p>accueil Agence</p>
      </router-link>
      <router-link to="/agency/profile" class="link">
        <p>profile Agence</p>
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
