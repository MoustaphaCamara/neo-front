<template>

  <div class="navigation">
    <!-- nos liens de navigation  -->
    <img src="" alt="Logo"/>

    <div class="links">

      <router-link to="/">
        <p>Accueil</p>
      </router-link>

      <router-link to="/">
        <p>Connexion</p>
      </router-link>

      <router-link to="/">
        <p>Inscription</p>
      </router-link>

    </div>
    <!-- Afficher la navigation (router-view) -->
  </div>

</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style>
.navigation {
  width: 100%;
  display: flex;

}
</style>
