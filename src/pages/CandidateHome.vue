<template>
  <h1>Bienvenue jeune padawan _nom candidat_ !</h1>
  <div class="container">
    <div class="left-part">
      <Profile />
    </div>
    <div class="right-part">
      <h1>Voici les offres disponibles actuellement</h1>
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
    </div>
  </div>
</template>

<script>
import Offer from "../components/Offer.vue";
import Profile from "../components/Profile.vue";
export default {
  components: { Profile, Offer },
};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.left-part {
  width: 25%;
  background-color: var(--bg-black);
}

.right-part {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 75%;
  padding: 10px;
  background-color: var(--bg-gray);
  gap: 5px;
}

.right-part h1 {
  width: 100%;
  border-bottom: 1px solid white;
  background-color: var(--bg-sable);
  color: var(--text-hover-orange);
  padding: 5px 10px;
}
</style>
