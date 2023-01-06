<template>

  <div class="container">

    

    <div class="candidate-home">

      <h1>Bienvenue jeune padawan _nom candidat_ !</h1>
      <Profile />

    </div>

    <div class="candidate-offers">

      <h1>Voici les offres disponibles actuellement</h1>

      <div class="offer">
        <Offer />
      </div>

      <div class="offer">
        <Offer />
      </div>

      <div class="offer">
        <Offer />
      </div>
      
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

.candidate-home {
  width: 25%;
  background-color: var(--bg-black);
}

.candidate-offers {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 75%;
  padding: 10px;
  background-color: var(--bg-gray);
  gap: 5px;
}

.candidate-offers h1 {

  width: 100%;
  border-bottom: 1px solid white;
  background-color: var(--bg-sable);
  color: var(--text-hover-orange);
  padding: 5px 10px;
}

.offer {
  background-color: var(--bg-sable);
  width: 48%;
  padding: 10px;
  border-radius: 10px;
}

.offer h1 {
  color: var(--text-white);
}

.offer p {
  margin: 5px;
}

</style>
