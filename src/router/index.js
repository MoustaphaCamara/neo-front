import { createRouter, createWebHistory } from "vue-router";
// ici on aura besoin d'importer que les "pages" et non les components, pour que nos urls (exemple neoset.com/connexion) soient créés
import HomePage from "../pages/HomePage.vue";
import ConnexionPage from "../pages/ConnexionPage.vue";
import RegistrationPage from "../pages/RegistrationPage.vue";
import CandidatePage from "../pages/CandidatePage.vue";
import AgencyPage from "../pages/AgencyPage.vue";
import CreateOffer from "../pages/CreateOffer.vue";
import ApplyOffer from "../pages/ApplyOffer.vue";

const routes = [
  { path: "/", component: HomePage },
  // inscription & connexion (choix candidat ou agence sur même page)
  { path: "/registration", component: RegistrationPage },
  { path: "/connexion", component: ConnexionPage },
  // candidat
  { path: "/candidate", component: CandidatePage },
  { path: "/candidate/apply", component: ApplyOffer },
  // agence
  { path: "/agency", component: AgencyPage },
  { path: "/agency/create", component: CreateOffer },

  // chemin dynamique pour les offres en fonction de leur id
  //   { path: "/offer/:id", component: JobOffer, props: true },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
