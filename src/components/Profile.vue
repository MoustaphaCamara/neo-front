<template>
  <div v-if="randomUser != null" class="profile">
    <!-- <p><pre>{{ randomUser }}</pre></p> -->
    <h2>Statut : {{ title }}</h2>
    <div class="avatar-container">
      <img
        v-if="randomUser != null"
        class="user-avatar"
        :src="randomUser.data.results[0].picture.large"
        alt="profile-pic"
      />
      <p>
        <em> Photo de {{ randomUser.data.results[0].name.first }}</em>
      </p>
    </div>
    <p>Nom : {{ randomUser.data.results[0].name.first }}</p>
    <p>E-mail : {{ randomUser.data.results[0].email }}</p>
    <p v-show="ceo_name">CEO Name : {{ ceo_name }}</p>
    <p>Téléphone : {{ randomUser.data.results[0].phone }}</p>
    <p>Planète d'origine : {{ randomUser.data.results[0].location.city }}</p>
    <p>CV : {{ cv }}</p>
    <p v-show="website">Site internet : {{ website }}</p>
    <button class="apply">{{ action }}</button>
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
.profile {
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
}
.profile h2 {
  color: var(--blue);
}
.profile p {
  color: white;
}
</style>
