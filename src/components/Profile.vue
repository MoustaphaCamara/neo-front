<template>
  <div class="profile">
    <h2>Statut : {{ title }}</h2>
    <p>Nom : {{ name }}</p>
    <p>E-mail : {{ email }}</p>
    <p>Téléphone : {{ telephone }}</p>
    <p>Planète : {{ planet }}</p>
    <p>CV : {{ cv }}</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      title: "Candidat",
      name: "Mouss",
      email: "dupont@gmail.com",
      telephone: "07 83 88 31 75",
      planet: "Mars",
    };
  },
  methods: {
    fetchData() {},
  },
};
</script>

<style>
.profile h2 {
  color: var(--title-blue);
}
.profile p {
  color: white;
}
</style>
