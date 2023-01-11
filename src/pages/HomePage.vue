<template>
  <div class="home-container">
    <Banniere :randomUser="randomUser" />
    
  <div class="search-section"> 
    <h2>Tu recherches une offre en particulier ?</h2>
    <form action="" class="search">
      <input type="text" name="what" placeholder="Métier, mots-clés ou agence" id="">
      <input type="text" name="where" placeholder="Nom de la planète" id="">
      <input type="submit" value="Rechercher">
    </form>
  </div>

  <h2>Les dernières offres mises en ligne</h2>

  <section class="liste-offres">
    <OfferJob />
    <OfferJob />
    <OfferJob />
    <OfferJob />
    <OfferJob />
    <OfferJob />
  </section>
   
 
  </div>
</template>

<script>
// https://randomuser.me/api
import Banniere from "../components/Banniere.vue";
export default {
  components: { Banniere, OfferJob },
  props: {
    randomUser: Array | Object,
  },
};

import OfferJob from "../components/OfferJob.vue";
</script>

<style>
.search-section, .search-section h2{
  background-color: rgb(255, 255, 255);
  color: black;
  text-align: center;
  padding: 32px;
}
.search {
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;

}

h2{
  color: white;
  text-align: center;
}

.liste-offres{
  display: flex; 
  flex-wrap: wrap;
  gap:8px;
  justify-content: space-evenly;
}

</style>
