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

        <p><em> Photo de Frédéric</em></p>

    </div>

    <div class="profil-information">

      <p>Nom : Boussemart</p>
      <p>E-mail : frederic.bsm@gmail.com</p>
      <p v-show="ceo_name">CEO Name : Moi meme</p>
      <p>Téléphone : +33 06 95 47 78 63</p>
      <p>Planète d'origine : Terre</p>
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

.profil-information p {
  white-space: nowrap;
  padding: 5px;
}

.user-avatar {
  border-radius: 50%;
  box-shadow: 0 0 0px 5px var(--blue), 0 0 15px 10px var(--sable);

}

.profil {
  /* height: 50vh; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  /* border: 1px solid red; */
}

.profil h2 {
  color: var(--blue);
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
  /* border: 1px solid yellow; */

}

.profil-information {
  /* border: 1px solid orange; */
  display: flex;
  flex-direction: column;
  text-align: center;
}

.check-offer {
  text-align: center;
  margin-top: 10px;
  /* border: 1px solid blue; */

}


.apply {
  text-transform: uppercase;
  background: var(--blue);
  color: white;
  padding: 16px 40px;
  border-radius: 8px;
  transition: 0.3s ease;
  width: 90%;
  /* min-width: 180px;
  max-width: 200px; */
}
.apply:hover {
  /* background: var(--sable); */
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
  /* border: 1px solid red; */
}

.profil-avatar {
  width: 30%;

}

.profil-information {
  width: 40%;
  text-align: center;
  justify-content: space-around;
 
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
    width: 25%;

  }

  .profil-information {
    width: 75%;
  }

  .check-offer {
  
    width: 100%;
    
  }

  .apply { 
    width: 50%;
  }

}


</style>
