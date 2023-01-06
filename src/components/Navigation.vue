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
        <p>CANDIDAT - accueil</p>
      </router-link>
      <router-link to="/candidate/profile" class="link">
        <p>CANDIDAT - profil</p>
      </router-link>
      <!-- agence -->
      <router-link to="/agency/home" class="link">
        <p>AGENCE - accueil</p>
      </router-link>
      <router-link to="/agency/profile" class="link">
        <p>AGENCE - profil</p>
      </router-link>
      <!-- offres d'emplois -->
      <router-link to="/candidate/apply" class="link">
        <p>Postuler (candidat)</p>
      </router-link>
      <router-link to="/agency/create" class="link">
        <p>Créer offre (agence)</p>
      </router-link>
    </div>
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
