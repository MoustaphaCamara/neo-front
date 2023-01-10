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
      randomUser: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get("http://neo-back/planet").then((res) => console.log(res));
      // routes : https://documenter.getpostman.com/view/25228793/2s8Z75UW2r
    },
  },
};
</script>

<template>
  <div>
    <Navigation :randomUser="randomUser" />
    <router-view :randomUser="randomUser"></router-view>
    <Footer />
  </div>
</template>

<style scoped></style>
