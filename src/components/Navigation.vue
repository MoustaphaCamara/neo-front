<template>
  <div class="nav-container">
    <div>
      <!-- ancien : https://i.ibb.co/JrhTCp2/logo-neosettlers.png -->
      <router-link to="/" class="link logo">
        <img src="../assets/logo-neosettlers.png" alt="logo" />
      </router-link>
    </div>

    <div class="links">
      <p>
        Salut
        <span v-if="randomUser != null" class="user">
          {{ randomUser.data.results[0].name.first }}
        </span>
      </p>
      <router-link to="/connexion" class="link">
        <p>Connexion</p>
      </router-link>

      <router-link to="/registration" class="link">
        <p>Inscription</p>
      </router-link>
      <!-- candidat et agency seront cachés une fois le développement des fonctionnalités fait, là c'est pour naviguer tranquillement.. :) -->
      <!-- candidat -->
      <router-link to="/candidate" class="link">
        <p>CANDIDAT</p>
      </router-link>
      <!-- agence -->
      <router-link to="/agency" class="link">
        <p>AGENCE</p>
      </router-link>
      <!-- offres d'emplois -->
      <!-- <router-link to="/candidate/apply" class="link">
        <p>Postuler (candidat)</p>
      </router-link> -->
      <router-link to="/agency/create" class="link">
        <p>Créer offre (agence)</p>
      </router-link>
      <!-- deconnexion -->
      <router-link to="/" class="link">
        <p>
          <i class="fa-solid fa-power-off"></i>
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    randomUser: Array | Object,
  },
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
  border-radius: 0 20px 0 20px;
  transform: scale(1.1);
}

.link {
  text-decoration: none;
}

.logo img {
  width: 100px;
}
.logo.router-link-active {
  background: none;
}
.router-link-active {
  background-color: var(--sable);
  border-radius: 0 15px 0 15px;
  transition: 0.2s;
}

.router-link-active p {
  color: var(--text-white);
}
.user {
  font-size: 2rem;
  color: cyan;
  text-shadow: 0 0 15px cyan;
}
</style>
