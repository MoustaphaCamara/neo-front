<template>
  <div class="nav-container">

    <div class="logo-user">
      <!-- ancien : https://i.ibb.co/JrhTCp2/logo-neosettlers.png -->
      <router-link to="/" class="link logo">
        <img src="../assets/logo-neosettlers.png" alt="logo" />
      </router-link>

      <p>
        Salut
        <span v-if="randomUser != null" class="user">
          {{ randomUser.data.results[0].name.first }}
        </span>
      </p>

    </div>

    <div class="wrap">
      <img src="../assets/menu_burger.png" alt="logo" class="wrap-img"/>
    </div>

    <div class="links">
      

      <router-link to="/connexion" class="link connexion">
        <p>Connexion</p>

        <div class="connexion-niv2">
          
          <router-link to="/connexion" class="link">
            <p>Agence</p>
          </router-link>
          <router-link to="/connexion" class="link">
            <p>Candidat</p>
          </router-link>


        </div>
      </router-link>

      <router-link to="/registration" class="link registration">
        <p>Inscription</p>

        <div class="registration-niv2">
          <router-link to="/registration" class="link">
            <p>Agence</p>
          </router-link>
          <router-link to="/registration" class="link">
            <p>Candidat</p>
          </router-link>
        </div>

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
  border: 1px solid red;
}

.logo-user {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.wrap-img {
  width: 50px;
  display: none;
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

.connexion {
  position: relative;
 
}

.connexion-niv2 {

  display: none;

}

.connexion:hover .connexion-niv2{
  transition: 0.2s;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  border: 1px solid  var(--sable);
  border-radius: 0 0 10px 10px;

}

/*  */

.registration {
  position: relative;
 
}

.registration-niv2 {

  display: none;
  transition: 0.2s;

}

.registration:hover .registration-niv2{

  display: flex;
  width: 100%;
  flex-direction: column;
  position: absolute;
  border: 1px solid  var(--sable);
  border-radius: 0 0 10px 10px;

}


@media screen and (max-width: 830px) {

  .links {
    display: none;
    flex-direction: column;
  }

  .wrap-img {
  display: block;
}

.wrap-img:hover {

  background-color: red;

}




}



</style>
