<template>
  <div class="container">
    <div class="left-part">
      <Profile title="DEIOJDEIJFIOJZRIOFJZR" />
    </div>
    <div class="right-part">
      <h1>Voici les offres disponibles actuellement</h1>
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
  background-color: var(--bg-gray);
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.left-part {
  width: 25%;
  border-right: 2px solid black;
  background: repeating-linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.301),
    transparent 100px
  );
}

.right-part {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 75%;
  background: linear-gradient(to right, var(--bg-gray), black);

  /* background: repeating-linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.301),
    transparent 200px
  ); */
  gap: 5px;
}
.right-part h1 {
  width: 100%;
  border-bottom: 1px solid white;
  /* background-color: var(--bg-sable); */
  /* color: var(--text-hover-orange); */
  padding: 5px 10px;
  font-weight: 100;
  color: var(--text-hover-orange);
}
</style>
