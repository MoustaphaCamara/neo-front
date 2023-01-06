<script setup>
import Footer from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div>
    <Navigation />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped></style>
