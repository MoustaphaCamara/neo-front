<template>
  <div class="registration-container">
    <div class="registration">
      <div class="inscription-logo">
        <!-- <i class="registration-logo fa-regular fa-user"></i> -->
        <!-- <img
          class="user-avatar"
          v-if="randomUser != null"
          :src="randomUser.data.results[0].picture.large"
          alt="profile-pic"
        /> -->
      </div>
      <div class="type-container">
        <p>
          Vous êtes : <span v-if="type === 'Candidat'">un</span>
          <span v-else-if="type === 'Agence'">une</span> {{ type }}
        </p>
        <select v-model="type">
          <option disabled value="">Sélectionner</option>
          <option>Candidat</option>
          <option>Agence</option>
        </select>
      </div>
      <!-- formulaire AGENCE -->
      <form
        id="form"
        v-if="type === 'Agence'"
        class="form"
        action="/"
        method="post"
      >
        <label for="name">Nom de l'agence</label>
        <input required type="text" v-model="agency.name" />

        <label for="ceo-name">Nom CEO</label>
        <input required type="text" v-model="agency.ceo_name" />

        <label for="mail">E-mail</label>
        <input required type="email" v-model="agency.email" />

        <label for="phone">Téléphone</label>
        <input required type="tel" v-model="agency.tel" />

        <label for="website">Site Web</label>
        <input required type="text" v-model="agency.website" />

        <label for="psw1">Mot de passe</label>
        <input required type="password" v-model="agency.pwd" />

        <label for="psw2">Confirmation du mot passe</label>
        <input required type="password" />

        <label for="logo">Logo</label>
        <input required type="text" v-model="agency.logo" />

        <label for="id_planet">id_planet</label>
        <input required type="text" v-model="agency.id_planet" />
        <button @click="sendAgencyData" class="data-button">
          S'inscrire (agence)
        </button>
      </form>
      <!-- formulaire CANDIDAT -->
      <form
        id="form"
        v-if="type === 'Candidat'"
        class="form"
        action="/"
        method="post"
      >
        <label for="name">Votre nom</label>
        <input required type="text" v-model="candidate.name" />

        <label for="mail">E-mail</label>
        <input required type="email" v-model="candidate.email" />

        <label for="phone">Téléphone</label>
        <input required type="tel" v-model="candidate.tel" />
        <!-- <input required
          id="phone"
          type="tel"
          pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
          name="phone"
        /> -->
        <label for="psw1">Mot de passe</label>
        <input required type="password" v-model="candidate.pwd" />

        <label for="psw2">Confirmation du mot passe</label>
        <input required type="password" />

        <label for="id_planet">id_planet</label>
        <input required type="text" v-model="candidate.id_planet" />

        <label for="avatar">Avatar</label>
        <input required type="text" v-model="candidate.avatar" />

        <label for="cv">CV</label>
        <input required type="text" v-model="candidate.cv" />

        <!-- <button @click="sendCandidateData" class="data-button">
          S'inscrire (candidat)
        </button> -->
        <input
          type="submit"
          @click="sendCandidateData"
          value="S'inscrire(candidat)"
        />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// mettre tous les input required en required sans répéter à chaque fois:
// let allElem = document.querySelectorAll("input required,textarea");
// allElem.forEach((elem) => {
//   elem.required = true;
// });

export default {
  name: "RegistrationPage",
  data() {
    return {
      type: "",
      agency: {
        name: "",
        email: "",
        pwd: "",
        ceo_name: "",
        tel: "",
        website: "",
        logo: "",
        id_planet: "",
      },
      candidate: {
        name: "",
        email: "",
        pwd: "",
        id_planet: "",
        tel: "",
        avatar: "",
        cv: "",
      },
    };
  },

  methods: {
    resetForm() {
      var form = document.getElementById("form");
      form.reset();
    },
    sendAgencyData(e) {
      // e.preventDefault();
      alert("Vos données ont bien été enregistrées !");
      var data = new FormData();
      data.append("name", this.agency.name);
      data.append("email", this.agency.email);
      data.append("pwd", this.agency.pwd);
      data.append("ceo_name", this.agency.ceo_name);
      data.append("tel", this.agency.tel);
      data.append("website", this.agency.website);
      data.append("logo", this.agency.logo);
      data.append("id_planet", this.agency.id_planet);
      const config = {
        method: "post",
        url: "http://neo-back/add-agency",
        headers: {
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
        },
        data,
      };
      axios(config)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      this.resetForm();
    },
    sendCandidateData(e) {
      // e.preventDefault();
      alert("Vos données ont bien été enregistrées !");
      var data = new FormData();
      data.append("name", this.candidate.name);
      data.append("email", this.candidate.email);
      data.append("pwd", this.candidate.pwd);
      data.append("id_planet", this.candidate.id_planet);
      data.append("tel", this.candidate.tel);
      data.append("avatar", this.candidate.avatar);
      data.append("cv", this.candidate.cv);
      const config = {
        method: "post",
        url: "http://neo-back/add-candidate",
        headers: {
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
        },
        data,
      };
      axios(config)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      this.resetForm();
    },
  },
  props: {
    // randomUser: Array | Object,
  },
};
</script>

<style>
.inscription-logo {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 16px;
}

.registration-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid var(--sable);
}

.fa-user {
  font-size: 32px;
  color: var(--text-white);
}

.container-registration {
  width: 400px;
  padding: 10px;
  border: 1px solid black;
  margin: auto;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 5px;
}
.type-container p,
.type-container p span {
  color: white;
  text-shadow: 2px 2px black;
  padding: 16px 0;
}
select {
  margin-bottom: 8px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-shadow: 2px 2px black;
}
</style>
