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

----------------------
STYLES
----------------------

Style par défaut de l'application : style.css
Style des components : <style scoped> dans chaque component

 Comment faire un rendu conditionnel en vue
       <div class="type-container">
        <p>Vous êtes : {{ type }}</p>
        <select v-model="type">
          <option disabled value="">Sélectionner</option>
          <option>Candidat</option>
          <option>Agence</option>
        </select>
      </div>
      <label for="name" v-if="type === 'Agence'">Nom de l'agence</label>
        <label for="name" v-if="type === 'Candidat'">Nom du candidat</label>
  -->

<!-- local storage -->
