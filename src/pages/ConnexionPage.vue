<template>
  <div class="connexion-container">
    <div class="connexion">
      <div class="type-container">
        <p>Connexion en tant que : {{ type }}</p>
        <select v-model="type">
          <option disabled value="">Sélectionner</option>
          <option>Candidat</option>
          <option>Agence</option>
        </select>
      </div>
      <!-- CONNEXION AGENCE -->
      <form class="form" v-if="type === 'Agence'">
        <div class="name">
          <label for="user_name">Nom de votre agence</label>
          <input required type="text" name="user_name" id="name" />
        </div>
        <div class="password">
          <label for="user_password">Code d'accès</label>
          <input required type="password" name="user_password" id="password" />
        </div>
        <input type="submit" value="Connexion" class="connect" />
      </form>
      <!-- CONNEXION CANDIDAT -->
      <form class="form" v-if="type === 'Candidat'">
        <div class="name">
          <label for="user_name">votre nom</label>
          <input required type="text" name="user_name" id="name" />
        </div>
        <div class="password">
          <label for="user_password">mot de passe</label>
          <input required type="password" name="user_password" id="password" />
        </div>
        <input type="submit" value="Connexion" class="connect" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConnexionPage",
  data() {
    return {
      type: "",
    };
  },
};
</script>

<style>
h1 {
  color: var(--sable);
  text-shadow: 2px 0 black;
}

.form {
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 8px var(--sable);
  background-color: #bea684da;
  gap: 16px;
  margin-top: 24px;
  /* margin: 24px 0; */
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.name,
.password,
.email,
.offer-title,
.offer-content,
.planet-name,
.salary,
.agency-id {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
input[type="text"],
input[type="password"],
input[type="tel"],
input[type="email"] {
  background: var(--sable);
  padding: 8px;
  border-radius: 8px;
  outline: none;
  font-family: var(--font-title);
  transition: 0.5s ease;
  border: 1px solid #8a7961;
  text-align: center;
}
input[type="text"]:focus,
input[type="password"]:focus,
input[type="tel"]:focus,
input[type="email"]:focus {
  border: 4px solid black;
}
input {
  width: 200px;
  align-self: center;
}
input[type="submit"],
.data-button {
  color: var(--sable);
  border: 2px solid var(--sable);
  padding: 16px;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: bolder;
  transition: 0.3s ease;
  margin-top: 8px;
  background: rgba(0, 0, 0, 0.788);
}
input[type="submit"]:hover,
.data-button:hover {
  background: black;
  box-shadow: inset 0 0 30px var(--sable);
  transform: scale(1.1);
  cursor: pointer;
}
label {
  text-transform: uppercase;
}
</style>
