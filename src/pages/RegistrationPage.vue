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

      <form class="form" action="/" method="post">
        <label for="name">Nom</label>
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
        />

        <label for="website">Site Web</label>
        <input id="website" type="text" name="website" />

        <label for="psw1">Mot de passe :</label>
        <input id="psw1" type="password" name="password" />

        <label for="psw2">Confirmation du mot passe :</label>
        <input id="psw2" type="password" name="password2" />
      </form>
      <input type="submit" value="Confirmer" />
    </div>
  </div>
  <!-- on peut essayer de ne faire qu'une page inscription pour les 2 (candidat & agence)
  si ça peut marcher comme ça :
  un select entre "candidat" - "choix", si on sélectionne candidat on affiche que tel et tel input, si agence on affiche les autres input
  à voir si c'est plus simple ou s'il vaut mieux faire 2 pages différentes
  -->
</template>

<script>
export default {
  name: "RegistrationPage",
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
</style>
