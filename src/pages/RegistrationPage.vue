<template>
  <div class="registration-container">
    <div class="inscription">
      <div class="inscription-logo">
        <h1>Inscription</h1>

        <div class="logo">
          <i class="fa-regular fa-user"></i>
          <!-- <img src="/" alt="logo"> -->
          <!-- <img v-if="src" src="/" alt="logo"> -->
        </div>
      </div>
      <div class="type-container">
        <p>
          Vous êtes : <span v-if="type === 'Candidat'">un</span>
          <span v-else>une</span> {{ type }}
        </p>
        <select v-model="type">
          <option disabled value="">Sélectionner</option>
          <option>Candidat</option>
          <option>Agence</option>
        </select>
      </div>

      <!-- formulaire AGENCE -->
      <form v-if="type === 'Agence'" class="form" action="/" method="post">
        <label for="name">Nom de l'agence</label>
        <input type="text" id="name" name="user_name" />

        <label for="ceo-name">Nom CEO</label>
        <input type="text" id="ceo-name" name="ceo_name" />

        <label for="mail">E-mail</label>
        <input type="email" id="mail" name="user_mail" />

        <label for="phone">Téléphone</label>
        <input
          id="phone"
          type="tel"
          pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
          name="phone"
          required
        />

        <label for="website">Site Web</label>
        <input id="website" type="text" name="website" />

        <label for="psw1">Mot de passe</label>
        <input id="psw1" type="password" name="password" />

        <label for="psw2">Confirmation du mot passe</label>
        <input id="psw2" type="password" name="password2" />
      </form>
      <!-- formulaire CANDIDAT -->
      <form v-if="type === 'Candidat'" class="form" action="/" method="post">
        <label for="name">Votre nom</label>
        <input type="text" id="name" name="user_name" />

        <label for="mail">E-mail</label>
        <input type="email" id="mail" name="user_mail" />

        <label for="phone">Téléphone</label>
        <input
          id="phone"
          type="tel"
          pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
          name="phone"
          required
        />

        <label for="psw1">Mot de passe</label>
        <input id="psw1" type="password" name="password" required />

        <label for="psw2">Confirmation du mot passe</label>
        <input id="psw2" type="password" name="password2" required />
      </form>
      <input type="submit" value="Confirmer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrationPage",
  data() {
    return {
      type: "",
    };
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

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid var(--bg-sable);
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
}
select {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-shadow: 2px 2px black;
  margin: 16px 0;
}
</style>
