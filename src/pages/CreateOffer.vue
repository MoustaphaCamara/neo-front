<template>
  <div class="create-offer-container">
    <!-- page pour Agence -->
    <form action="" class="create-offer">
    <h1>Rédiger une offre </h1>

    <div class="form">
      <div class="offer-title">
        <label for="offer_title">Titre de l'offre</label>
        <input type="text" name="offer_title" id="offer_title">
      </div>
      <div class="offer-content">
        <label for="offer_content">Description de l'offre</label>
        <input type="text" name="offer_content" id="offer_content">
      </div>
      <div class="planet-name">
        <label for="planet_name">Nom de la planète</label>
        <input type="text" name="planet_name" id="planet_name">
      </div>
      <div class="salary">
        <label for="salary">Salaire</label>
        <input type="text" name="salary" id="salary">
      </div>
      <div class="agency-id">
        <label for="agency_id">ID de l'agence</label>
        <input type="text" name="agency_id" id="agency_id">
      </div>
    </div>

    <input type="submit" value="envoyer"/>
  </form>
  </div>
</template>

<script>
export default {
  name: "CreateOffer",
};
</script>

<style></style>
