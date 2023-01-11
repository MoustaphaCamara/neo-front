<!-- methode post dans homepage -->

<template>
  <div class="home-container">
    <Banniere :planets="planets" />
    <div v-for="planet in planets" :key="planet.id">
      <p style="color: white">
        {{ planet.id }} - Planète du nom de {{ planet.name }}
      </p>
    </div>
    <div class="container">
      <div class="test-data">
        <button @click="sendData">Send data to api</button>
      </div>
    </div>
  </div>
</template>

<script>
// https://randomuser.me/api
import Banniere from "../components/Banniere.vue";
import axios from "axios";
export default {
  components: { Banniere },
  props: {
    planets: Array,
  },
  data() {
    return {
      agency: {
        name: "Julio",
        email: "julio@julio.com",
        pwd: "pass",
        id_planet: "2",
        tel: "0782828282",
        avatar: "avatar",
        cv: "cv",
      },
      newPlanet: {
        id: "8",
        name: "trappist-PNI",
      },
    };
  },
  methods: {
    sendData() {
      var data = new FormData();
      data.append("name", "robert");
      data.append("email", "robert@rob.com");
      data.append("pwd", "pass");
      data.append("ceo_name", "robby");
      data.append("tel", "0617289463");
      data.append("website", "rob.com");
      data.append("logo", "urlLogo");
      data.append("id_planet", "2");
      const config = {
        method: "post",
        url: "http://neo-back/add-agency",

        headers: {
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
        },
        data: data,
      };
      axios(config).then((res) => console.log(res));

    },
  },
};
</script>

<style></style>
