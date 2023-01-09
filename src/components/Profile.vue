<template>
  <div class="profile">
    <h2>Statut : {{ title }}</h2>
    <p>Nom : {{ name }}</p>
    <p>E-mail : {{ email }}</p>
    <p>Téléphone : {{ telephone }}</p>
    <p>Planète : {{ planet }}</p>
    <p>CV : {{ cv }}</p>
    <button class="apply">{{ action }}</button>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    title: String,
    name: String,
    email: String,
    telephone: String,
    planet: String,
    cv: String,
    action: String,
  },
};
</script>

<style>
.apply {
  text-transform: uppercase;
  background: var(--blue);
  color: white;
  padding: 16px 40px;
  border-radius: 8px;
  transition: 0.3s ease;
  width: 100%;
  min-width: 157px;
  max-width: 180px;
}
.apply:hover {
  /* background: var(--sable); */
  background: darkviolet;
  cursor: pointer;
  transform: scale(1.05);
}
.profile {
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
}
.profile h2 {
  color: var(--blue);
}
.profile p {
  color: white;
}
</style>
