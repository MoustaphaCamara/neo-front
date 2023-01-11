<template>
  <div class="home-container">
    <!-- <div v-for="planet in planets" :key="planet.id">
      <p style="color: white">
        {{ planet.id }} - Planète du nom de {{ planet.name }}
      </p>
    </div> -->
    <Banniere :planets="planets" />
  </div>
</template>

<script>
import Banniere from "../components/Banniere.vue";
export default {
  components: { Banniere },
  props: {
    planets: Array,
  },
};
</script>

<style></style>
