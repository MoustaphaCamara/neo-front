<template>
  <div>
    <Navigation />
    <h1>Home</h1>
   <Banniere />
  </div>
</template>

<script>
import Banniere from "./Banniere.vue";
import Navigation from "./Navigation.vue";

export default { components: { Navigation, Banniere } };
</script>

<style></style>
