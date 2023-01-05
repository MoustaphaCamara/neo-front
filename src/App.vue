<!-- 
  /*\ /*\ /*\ /*\ /*\ /*\ /*\ 
  CONVENTIONS POUR NOTRE PROJET
  /*\ /*\ /*\ /*\ /*\ /*\ /*\ 
  
  (Au pire si c'est pas pareil on embellira plus tard)
  
  Nom des classes : 
  kebab-case
  exemple
  <div class="something-container">
  -->

<script setup>
import HomePage from "./components/HomePage.vue";
</script>

<template>
  <div>
        <HomePage />
    <Banniere />
  </div>
</template>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
