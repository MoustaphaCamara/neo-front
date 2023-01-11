<template>
  <!-- <div v-if="randomUser != null" class="profil">
    
    <div class="profil-avatar">
    
      <h2>Statut : {{ title }}</h2>
        <div class="avatar-container">
          <img v-if="randomUser != null" class="user-avatar" :src="randomUser.data.results[0].picture.large" alt="profile-pic"/>
          <p>
            <em> Photo de {{ randomUser.data.results[0].name.first }}</em>
          </p>
        </div>
    </div>

    <div class="profil-information">
      <p>Nom : {{ randomUser.data.results[0].name.first }}</p>
      <p>E-mail : {{ randomUser.data.results[0].email }}</p>
      <p v-show="ceo_name">CEO Name : {{ ceo_name }}</p>
      <p>Téléphone : {{ randomUser.data.results[0].phone }}</p>
      <p>Planète d'origine : {{ randomUser.data.results[0].location.city }}</p>
      <p>CV : {{ cv }}</p>
      <p v-show="website">Site internet : {{ website }}</p>
      
    </div>

    <div class="check-offer">
      <button class="apply">{{ action }}</button>
    </div>

  </div> -->

  <div v-if="randomUser != null" class="profil">
    <!-- <p><pre>{{ randomUser }}</pre></p> -->
    <div class="profil-avatar">
    
      <h2>Candidat</h2>

        <div class="avatar-container">
          <img v-if="randomUser != null" class="user-avatar" src="https://picsum.photos/100" alt="profile-pic"/>
        </div>

        <p><em> Photo de Mouss</em></p>

    </div>

    <div class="profil-information">
      <h2>Détails</h2>
      <p>Nom : Mousss</p>
      <p>E-mail : mouss.carter@gmail.com</p>
      <p v-show="ceo_name">CEO Name : Carter</p>
      <p>Téléphone : +33 06 95 47 78 63</p>
      <p>Planète d'origine : Mars</p>
      <p>CV : Télécharger</p>
      <p v-show="website">Site internet : Auncun</p>
      
    </div>

    <div class="check-offer">
      <button class="apply">Liste des offres</button>
    </div>

  </div>

</template>

<script>
export default {
  name: "Profile",
  props: {
    title: String,
    name: String,
    ceo_name: String,
    website: String,
    email: String,
    telephone: String,
    planet: String,
    cv: String,
    action: String,
    randomUser: Array | Object,
  },
};
</script>

<style>

.user-avatar {
  border-radius: 50%;
  box-shadow: 0 0 0px 5px var(--blue), 0 0 15px 10px var(--sable);

}

.profil {
 
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
 
}

.profil h2 {
  color: var(--blue);
  text-decoration: underline;
}
.profil p {
  color: white;
}

.profil-avatar {
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

}

.profil-avatar::before {
  content: "";
  background-color: gray;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  border-radius: 10px;

}

.profil-information {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.profil-information h2 {
  margin: 20px 0 20px 0;
  
}

h2 {
  text-shadow: 0 0px 2px black;
}

.profil-information p {
  white-space: nowrap;
  padding: 5px;
}

.check-offer {
  text-align: center;
  margin-top: 10px;

}


.apply {
  text-transform: uppercase;
  background: var(--blue);
  color: white;
  padding: 16px 40px;
  border-radius: 8px;
  transition: 0.3s ease;
  width: 90%;
 
}
.apply:hover {
  background: darkviolet;
  cursor: pointer;
  transform: scale(1.05);
}



@media screen and (max-width: 1000px) {

.profil {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

}

.profil-avatar {
  width: 35%;

}

.profil-information {
  width: 35%;
  text-align: center;
  justify-content: space-between;
  margin-top: 0;
 
}

.profil-information h2 {
  margin: 0 0 0 0;
}

.check-offer {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}

}

@media screen and (max-width: 720px) {

  .profil-avatar {
    width: 40%;

  }

  .profil-information {
    width: 60%;
  }

  .check-offer {
  
    width: 100%;
    
  }

  .apply { 
    width: 50%;
  }

}


</style>
