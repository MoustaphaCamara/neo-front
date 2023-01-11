<script setup>
import axios from "axios";
import Footer from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";
// API : https://randomuser.me/api
</script>
<script>
export default {
  name: "App",
  data() {
    return {
      planets: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const url = "http://neo-back/planet";
      axios
        .get(url, {
          headers: {
            "Access-Control-Allow-Headers": "*",
          },
        })
        .then((res) => (this.planets = res.data))
        .then((planets) => console.log(planets));
      // routes : https://documenter.getpostman.com/view/25228793/2s8Z75UW2r
    },
  },
};
</script>

<template>
  <div>
    <Navigation :planets="planets" />
    <router-view :planets="planets"></router-view>
    <Footer />
  </div>
</template>

<style scoped></style>
