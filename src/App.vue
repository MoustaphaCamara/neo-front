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
      axios
        .get("https://randomuser.me/api")
        .then((res) => (this.randomUser = res));
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