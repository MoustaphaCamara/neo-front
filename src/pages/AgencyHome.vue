<template>
  <div class="agency-home">
    <h1>Bienvenue Agence _nom agence_ !</h1>
    <p>Candidats disponibles actuellement</p>
    <Candidat />
  </div>
</template>

<script>
import Candidat from "../components/Candidat.vue";

export default {
  name: "AgencyHome",
  components: { Candidat },
};
</script>

<style></style>
