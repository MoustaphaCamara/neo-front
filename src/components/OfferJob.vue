<template>
  <div class="offer">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>

    <div class="contrat-salaire">
      <p>Type de contrat : {{ contrat_type }}</p>
      <button>Postuler</button>
      <p>
        Salaire annuel : <span>{{ salary }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfferJob",
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
  background: rgba(0, 0, 0, 0.8);
  color: var(--sable);
  /* background-color: var(--sable); */
  width: 48%;
  padding: 10px;
  border-radius: 10px;
  transition: 0.2s;
  border: 1px solid var(--bg-gray);
}

.offer:hover {
  cursor: pointer;
  scale: 1.02;
}

.offer h1 {
  color: var(--blue);
  font-size: 30px;
  font-weight: 100;
  text-shadow: 1px 1px 2px var(--bg-gray);
}

.offer p {
  margin: 5px;
}

.contrat-salaire {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--bg-gray);
  padding: 5px 0;
}

.contrat-salaire button {
  width: 100px;
  background-color: var(--bg-gray);
  border: 1px solid var(--orange);
  color: var(--text-white);
  border-radius: 12px 0 12px 0;
  transition: 0.3s;
  text-transform: uppercase;
  font-weight: bold;
}

.contrat-salaire button:hover {
  scale: 1.1;
  cursor: pointer;
  background: var(--orange);
  color: black;
}

p span {
  color: var(--orange);
}

@media screen and (max-width: 850px) {

.offer {
  width: 98%;
}

}

</style>
