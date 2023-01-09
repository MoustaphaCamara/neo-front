<template>
  <div class="home-container">
    <Banniere :randomUser="randomUser" />
  </div>
</template>

<script>
// https://randomuser.me/api
import Banniere from "../components/Banniere.vue";
export default {
  components: { Banniere },
  props: {
    randomUser: Array,
  },
};
</script>

<style></style>
