<template>
  <div class="connexion-container">
    <form action="" class="connexion">
      <h1>Connexion Agence</h1>
      <div class="form">
        <div class="name">
          <label for="user_name">Nom de l'agence</label>
          <input type="text" name="user_name" id="name" />
        </div>
        <div class="email">
          <label for="user_email">E-mail</label>
          <input type="email" name="user_email" id="email" />
        </div>
        <div class="password">
          <label for="user_password">Mot de passe</label>
          <input required type="password" name="user_password" id="password" />
        </div>
      </div>

      <input type="submit" value="Connexion" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AgencyConnexion",
};
</script>

<style>
.connexion-container,
.registration-container, .create-offer-container {
  /* background: black; */
  background: url("../assets/planet.jpg");
  background-size: cover;
}
h1 {
  /* color: var(--title-blue); */
  /* text-align: center;
  background: linear-gradient(
    to right,
    transparent,
    var(--bg-sable) 25%,
    var(--bg-sable) 75%,
    transparent
  );
  padding: 16px; */
  color: var(--text-sable);
  text-shadow: 2px 0 black;
}
.connexion,
.inscription, .create-offer{
  width: 40%;
  margin: 0 auto;
  text-align: center;
}
.form {
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 8px var(--bg-sable);
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
.email, .offer-title,.offer-content, .planet-name,.salary, .agency-id  {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
input[type="text"],
input[type="password"],
input[type="tel"],
input[type="email"] {
  background: var(--bg-sable);
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
input[type="submit"] {
  background: var(--bg-sable);
  color: black;
  border: 2px solid var(--text-sable);
  padding: 16px;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: bolder;
  transition: 0.3s ease;
  margin-top: 8px;
}
input[type="submit"]:hover {
  background: rgba(0, 0, 0, 0.788);
  color: var(--text-sable);
  transform: scale(1.1);
  cursor: pointer;
}
label {
  text-transform: uppercase;
}
</style>
