<template>
  <div class="offer">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <p>Type de contrat : {{ contrat_type }}</p>
    <p>Salaire annuel : {{ salary }}</p>
  </div>
</template>

<script>
export default {
  name: "Offer",
  data() {
    return {
      title: "Développeur•se JS/Vue",
      content:
        "Présentation de l'entreprise.Semji est un éditeur qui commercialise une 👉plateforme SaaS👈 de création de contenus digitaux, propulsée par de lIA 🚀, accompagnée de services professionnels SEO. Semji se différencie de ses concurrents par une expérience client unique apportée par sa plateforme et les services professionnels associés.Nos équipes sont animées par la recherche de la performance, de l’innovation et de la satisfaction Client. Si tu aimes partager, échanger et innover pour grandir ensemble, alors tu seras comme un poisson dans l'eau chez Semji !",
      contrat_type: "CDI",
      salary: "37k",

    };
  },
};
</script>

<style>

.offer {
  background-color: var(--bg-sable);
  width: 49%;
  padding: 10px;
  border-radius: 10px;
}

.offer h1 {
  color: var(--text-hover-orange);
  font-size: 30px;
}

.offer p {
  margin: 5px;
}

</style>
