<!-- 
  /*\ /*\ /*\ /*\ /*\ /*\ /*\ 
  CONVENTIONS POUR NOTRE PROJET
  /*\ /*\ /*\ /*\ /*\ /*\ /*\ 
  
  (Au pire si c'est pas pareil on embellira plus tard)
  
----------------------
CLASSES
----------------------
kebab-case
exemple
<div class="something-container">
  
----------------------
COMPONENTS
----------------------
NomMajuscule.vue
BASE DU COMPONENT VUE JS :

<template>
  <div class="nomdutemplate-container">
  </div>
</template>
<script>
  export default {
    name: "NomComponent.vue";
  }
</script>
  -->

<script setup>
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div>
    <Navigation />
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
