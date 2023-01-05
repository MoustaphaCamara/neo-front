import { createRouter, createWebHistory } from "vue-router";
// ici on aura besoin d'importer que les "pages" et non les components, pour que nos urls (exemple neoset.com/connexion) soient créés
import HomePage from "../pages/HomePage.vue";
import ConnexionPage from "../pages/ConnexionPage.vue";
import RegistrationPage from "../pages/RegistrationPage.vue";
import CandidateHome from "../pages/CandidateHome.vue";
import CandidateProfile from "../pages/CandidateProfile.vue";
import AgencyHome from "../pages/AgencyHome.vue";
import AgencyProfile from "../pages/AgencyProfile.vue";
import CreateOffer from "../pages/CreateOffer.vue";
import ApplyOffer from "../pages/ApplyOffer.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/connexion", component: ConnexionPage },
  { path: "/registration", component: RegistrationPage },
  { path: "/candidate/home", component: CandidateHome },
  { path: "/candidate/profile", component: CandidateProfile },
  { path: "/candidate/apply", component: ApplyOffer },
  { path: "/agency/home", component: AgencyHome },
  { path: "/agency/profile", component: AgencyProfile },
  { path: "/agency/create", component: CreateOffer },

  // chemin dynamique pour les offres en fonction de leur id
  //   { path: "/offer/:id", component: JobOffer, props: true },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
