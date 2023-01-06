<template>
  <div class="agency-home">
    <h1>Bienvenue Agence _nom agence_ !</h1>
    <p>Voici les candidats disponibles actuellement --></p>
    <Offer />
  </div>
</template>

<script>
import Offer from "../components/Offer.vue";

export default {
  name: "AgencyHome",
  components: { Offer },
};
</script>

<style></style>
