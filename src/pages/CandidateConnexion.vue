<template>
  <div class="connexion-container">
    <form action="" class="connexion">
      <h1>Connexion Candidat</h1>
      <div class="form">
        <div class="name">
          <label for="user_name">Nom :</label>
          <input type="text" name="user_name" id="name" />
        </div>
        <div class="email">
          <label for="user_email">E-mail :</label>
          <input type="email" name="user_email" id="email" />
        </div>
        <div class="password">
          <label for="user_password">Mot de passe :</label>
          <input required type="password" name="user_password" id="password" />
        </div>
      </div>
      <input type="submit" value="Connexion" />
    </form>
  </div>
</template>

<script>
export default {
  name: "CandidateConnexion",
};
</script>

<style></style>
