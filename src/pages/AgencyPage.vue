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
        action="Voir les candidats"
        ceo_name="Agent Grine"
      />
    </div>
    <div class="right-part">
      <h1>Candidats à recruter</h1>
      <OfferEmployee />
      <OfferEmployee />
      <OfferEmployee />
    </div>
  </div>
</template>

<script>
import OfferEmployee from "../components/OfferEmployee.vue";
import Profile from "../components/Profile.vue";
export default {
  name: "AgencyPage",
  data() {
    return {
      planets: ["Terre", "Jupiter"],
    };
  },
  components: { Profile, OfferEmployee },
};
</script>

<style>
.agency-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
