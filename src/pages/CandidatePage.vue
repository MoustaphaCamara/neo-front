<template>

  <div class="candidate-container">
    <div class="left-part">
      <Profile
        :randomUser="randomUser"
        title="Candidat"
        telephone="07 01 02 03 04"
        planet="Mars"
        cv="pas uploadé"
        action="Voir les offres"
      />
    </div>
    <div class="right-part">
      <h1>Offres de recrutement</h1>
      <OfferJob />
      <OfferJob />
      <OfferJob />
    </div>
  </div>
</template>

<script>
import OfferJob from "../components/OfferJob.vue";
import Profile from "../components/Profile.vue";
export default {
  name: "CandidatePage",
  components: { Profile, OfferJob },
  props: {
    randomUser: Array | Object,
  },
};
</script>

<style>
.candidate-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.left-part {
  width: 25%;
  border-right: 2px solid black;
  background: repeating-linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.301),
    transparent 100px
  );
}

.right-part {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 75%;
  /* background: linear-gradient(to right, var(--bg-gray), black); */
  gap: 5px;
}
.right-part h1 {
  width: 100%;
  border-bottom: 1px solid white;
  /* background-color: var(--sable); */
  /* color: var(--orange); */
  padding: 5px 10px;
  font-weight: 100;
  color: var(--orange);
}

@media screen and (max-width: 1000px) {

  .left-part {
    width: 100%;
  }

  .right-part {
    width: 100%;
  }

  
}

</style>
