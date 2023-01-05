<template>

    
    <div class="navigation">
    <!-- nos liens de navigation  -->

    <router-link to="/">
        <img src="" alt="Logo">
      <p>Accueil</p>
    </router-link>
    <router-link to="/fred">
      <p>Frédéric</p>
    </router-link>
    <!-- Afficher la navigation (router-view) -->
    <router-view></router-view>


    </div>
  </template>
  
  <script>
  export default {
    name: "Nav",
  };
  </script>
  
  <style></style>