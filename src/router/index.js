import { createRouter, createWebHistory } from "vue-router";
// ici on aura besoin d'importer que les "pages" et non les components, pour que nos urls (exemple neoset.com/connexion) soient créés
import HomePage from "../pages/HomePage.vue";
import ConnexionPage from "../pages/ConnexionPage.vue";
import RegistrationPage from "../pages/RegistrationPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/connexion", component: ConnexionPage },
  { path: "/registration", component: RegistrationPage },

  // chemin dynamique pour les offres en fonction de leur id
  //   { path: "/offer/:id", component: JobOffer, props: true },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
