<template>
  <div class="nav-container">
    <div>
      <router-link to="/" class="link logo">
        <img src="https://i.ibb.co/JrhTCp2/logo-neosettlers.png" alt="logo" />
      </router-link>
    </div>

    <div class="links">
      <div class="type-connexion">
        <router-link to="/agency/connexion" class="link">
          <p>Connexion agence</p>
        </router-link>

        <router-link to="/candidate/connexion" class="link">
          <p>Connexion candidat</p>
        </router-link>
      </div>

      <router-link to="/registration" class="link">
        <p>Inscription</p>
      </router-link>
      <!-- candidat et agency seront cachés une fois le développement des fonctionnalités fait, là c'est pour naviguer tranquillement.. :) -->
      <!-- candidat -->
      <router-link to="/candidate/home" class="link">
        <p>Offres disponibles (candidat)</p>
      </router-link>
      <router-link to="/candidate/profile" class="link">
        <p>Favoris - Candidatures</p>
      </router-link>
      <!-- agence -->
      <router-link to="/agency/home" class="link">
        <p>Candidats à recruter</p>
      </router-link>
      <router-link to="/agency/profile" class="link">
        <p>Nos offres</p>
      </router-link>
      <!-- offres d'emplois -->
      <router-link to="/candidate/apply" class="link">
        <p>Postuler (candidat)</p>
      </router-link>
      <router-link to="/agency/create" class="link">
        <p>Créer offre (agence)</p>
      </router-link>
      <!-- deconnexion -->
      <router-link to="/" class="link">
        <p>Déconnexion</p>
      </router-link>
    </div>

    <!-- Afficher la navigation (router-view) -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
.nav-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: var(--bg-black);
}

.type-connexion {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.links {
  display: flex;
  align-items: center;
}

.links p {
  margin: 5px 10px;
  padding: 5px;
  color: #bea684;
  transition: 0.3s;
}

.link p:hover {
  text-decoration: underline;
  color: var(--text-white);
  border-radius: 0 10px 0 10px;
  transform: scale(1.1);
}

.link {
  text-decoration: none;
}

.logo img {
  width: 100px;
}

/* quand on est sur une page : router-link-active */
.router-link-active {
  /* font-size: 1.5rem;
  font-weight: bolder; */
  background-color: var(--bg-sable);
  border-radius: 0 5px 0 5px;
  transition: 0.2s;
}

.router-link-active p {
  color: var(--text-white);
}
</style>
