<template>
  <div class="offer">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>

    <div class="contrat-salaire">
      <p>Recherche : {{ contrat_type }}</p>
      <button>Recruter</button>
      <p>
        Coût annuel : <span>{{ salary }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfferEmployee",
  data() {
    return {
      title: "UN CANDIDAT MOTIVE",
      content:
        "Présentation de l'entreprise.Semji est un éditeur qui commercialise une 👉plateforme SaaS👈 de création de contenus digitaux, propulsée par de lIA 🚀, accompagnée de services professionnels SEO. Semji se différencie de ses concurrents par une expérience client unique apportée par sa plateforme et les services professionnels associés.Nos équipes sont animées par la recherche de la performance, de l’innovation et de la satisfaction Client. Si tu aimes partager, échanger et innover pour grandir ensemble, alors tu seras comme un poisson dans l'eau chez Semji !",
      contrat_type: "CDI",
      salary: "37k",
    };
  },
};
</script>

<style scoped>
.offer {
  color: #000;
  background-color: rgba(255, 255, 255, 0.5);
}

.offer h1 {
  color: var(--blue);
  font-size: 30px;
  font-weight: 100;
  text-shadow: 1px 1px 2px var(--bg-gray);
}

.contrat-salaire button {
  background-color: var(--blue);
  box-shadow: 0 0 3px black;
  border: none;
  color: #000;
}
.contrat-salaire button:hover {
  background: green;
  color: white;
}

p span {
  color: green;
}
</style>
