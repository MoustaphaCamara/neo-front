<template>
  <div v-if="randomUser != null" class="profile">
    <!-- <p><pre>{{ randomUser }}</pre></p> -->
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

.profile {
  /* height: 50vh; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid red;
}

.profile h2 {
  color: var(--blue);
}
.profile p {
  color: white;
}

.profil-avatar {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid yellow;

}

.profil-information {
  border: 1px solid orange;
}

.check-offer {
  text-align: center;
  border: 1px solid blue;

}


.apply {
  text-transform: uppercase;
  background: var(--blue);
  color: white;
  padding: 16px 40px;
  border-radius: 8px;
  transition: 0.3s ease;
  width: 100%;
  min-width: 157px;
  max-width: 180px;
}
.apply:hover {
  /* background: var(--sable); */
  background: darkviolet;
  cursor: pointer;
  transform: scale(1.05);
}



@media screen and (max-width: 1150px) {

.profile {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid red;

}

.profil-avatar {
  max-width: 25%;

}

.profil-information {
  width: 75%;
  display: flex;
  flex-direction: row;

 
}

}

</style>
