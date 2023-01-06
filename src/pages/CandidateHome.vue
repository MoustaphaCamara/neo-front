<template>

  <div class="container">

    <div class="candidate-home">
      <h1>Bienvenue jeune padawan _nom candidat_ !</h1>
      <Profile />

    </div>

    <div class="candidate-offers">

      <p>Voici les offres disponibles actuellement --></p>

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
  width: 75%;
  background-color: var(--bg-gray);
}

.offer {

  width: 250px;
}




</style>
