<template>
  <div class="agency-container">
    <div class="left-part">
      <Profile
        title="Agence"
        name="The Settlers"
        email="settlers@gmail.com"
        telephone="07 01 02 03 04"
        planet="Mars"
        cv="pas uploadé"
        action="Voir les offres"
      />
    </div>
    <div class="right-part">
      <h1>Candidats à recruter</h1>
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
  name: "AgencyPage",
  components: { Profile, Offer },
};
</script>

<style>
.agency-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
