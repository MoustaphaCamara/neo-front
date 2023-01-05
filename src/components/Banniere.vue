<template>
  <div class="banner-container">
    <h1>986 111 offres d'emploi disponibles !</h1>
    <p>Rechercher des offres par planète ou par secteur d’activité.</p>
  </div>
</template>

<script>
export default {
  name: "Banniere",
};
</script>

<style scoped>
.banner-container {
  background-image: url("../assets/main-banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1,
p {
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px #000;
  padding: 5px;
}
</style>
