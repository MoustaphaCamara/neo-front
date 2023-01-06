<template>
  <div class="candidate-home">
    <h1>Bienvenue jeune padawan _nom candidat_ !</h1>
    <Profile />
    <p>Voici les offres disponibles actuellement --></p>
    <ul>
      <li>job offer</li>
      <li>job offer</li>
      <li>job offer</li>
    </ul>
  </div>
</template>

<script>
import Profile from "../components/Profile.vue";
export default {
  components: { Profile },
};
</script>

<style></style>
