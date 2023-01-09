<template>
  <div class="candidat">
    <div class="name-avatar">
      <h1>{{ name }}</h1>

      <div class="avatar">
        <i class="fa-regular fa-user"></i>
      </div>
    </div>

    <p>
      Profession : <span>{{ occupation }}</span>
    </p>

    <p>Email : {{ email }}</p>
    <p>Téléphone : {{ phone }}</p>
    <p>
      CV : <a href="">{{ cv }}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Recruit",
  data() {
    return {
      name: "Lefido",
      occupation: "Dévellopeur Web Full Stack",
      email: "Lefido@hotmail.com",
      phone: "+33 95 47 78 63",
      cv: "Télécharger",
    };
  },
};
</script>

<style>
.candidat {
  background-color: var(--sable);
  width: 49%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--bg-gray);
  transition: 0.2s;
}

.candidat:hover {
  cursor: pointer;
  scale: 1.02;
}

.candidat h1 {
  color: var(--orange);
  font-size: 30px;
  font-weight: 100;
}

.candidat p {
  margin: 5px;
}

.name-avatar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name-avatar h1 {
  border-bottom: 1px solid var(--text-white);
  width: 90%;
}

.candidat span {
  color: var(--blue);
  text-shadow: 1px 1px 2px black;
}

.avatar {
  width: 60px;
  height: 60px;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fa-user {
  font-size: 40px;
}
</style>
