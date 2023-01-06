<template>
  <div class="profile">
    <h2>Statut : {{ title }}</h2>
    <img src="" alt="picture" />
    <p>Nom : {{ name }}</p>
    <p>E-mail : {{ email }}</p>
    <p>Téléphone : {{ telephone }}</p>
    <p>Planète : {{ planet }}</p>
    <p>CV : {{ cv }}</p>
    <button class="apply">Voir les offres</button>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      title: "Candidat",
      picture: "../assets/main-banner.jpg",
      name: "Mouss",
      email: "dupont@gmail.com",
      telephone: "07 83 88 31 75",
      planet: "Mars",
      cv: "cv.pdf",
    };
  },
  methods: {
    fetchData() {},
  },
};
</script>

<style>
.apply {
  text-transform: uppercase;
  background: var(--title-blue);
  color: white;
  padding: 16px 40px;
  border-radius: 8px;
  transition: 0.3s ease;
}
.apply:hover {
  /* background: var(--bg-sable); */
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
  color: var(--title-blue);
}
.profile p {
  color: white;
}
</style>
