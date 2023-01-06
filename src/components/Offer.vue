<template>
  <div>
    <h1>Offre : {{ title }}</h1>
    <p>{{ content }}</p>
    <p>{{ contrat_type }}</p>
    <p>{{ salary }}</p>
  </div>
</template>

<script>
export default {
  name: "Offer",
  data() {
    return {
      title: "Développeur•se JS/React",
      content:
        "Présentation de l'entreprise.Semji est un éditeur qui commercialise une 👉plateforme SaaS👈 de création de contenus digitaux, propulsée par de lIA 🚀, accompagnée de services professionnels SEO.",
      contrat_type: "CDI",
      salary: "37k",

        
    };
  },
};
</script>

<style></style>
