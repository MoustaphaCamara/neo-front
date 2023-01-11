<template>
  <div class="banner-container">
    <h1>Bienvenue sur la plateforme NeoSettlers</h1>
    <h2 v-if="randomUser != null">
      Enchanté, {{ randomUser.data.results[0].name.first }}
    </h2>
    <h2>986 111 offres d'emploi disponibles !</h2>
    <p>Rechercher des offres par planète ou par secteur d’activité.</p>
  </div>
</template>

<script>
export default {
  name: "Banniere",
  props: {
    randomUser: Array | Object,
  },
};
</script>

<style scoped>
.banner-container {
  background: linear-gradient(to bottom, black, transparent, black);
  min-height: 70vh;
  height: fit-content;
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.banner-container::after {
  background-image: url("../assets/main-banner.jpg");
  background-size: cover;
}
.banner-container h1 {
  margin: 72px auto;
  color: white;
  text-shadow: 0 0 12px white;
  text-transform: uppercase;
}
.banner-container h2,
p {
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px #000;
  padding: 5px;
}
</style>
