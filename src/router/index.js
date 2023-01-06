import { createRouter, createWebHistory } from "vue-router";
// ici on aura besoin d'importer que les "pages" et non les components, pour que nos urls (exemple neoset.com/connexion) soient créés
import HomePage from "../pages/HomePage.vue";
import CandidateConnexion from "../pages/CandidateConnexion.vue";
import AgencyConnexion from "../pages/AgencyConnexion.vue";
import RegistrationPage from "../pages/RegistrationPage.vue";
import CandidateHome from "../pages/CandidateHome.vue";
import CandidateProfile from "../pages/CandidateProfile.vue";
import AgencyHome from "../pages/AgencyHome.vue";
import AgencyProfile from "../pages/AgencyProfile.vue";
import CreateOffer from "../pages/CreateOffer.vue";
import ApplyOffer from "../pages/ApplyOffer.vue";

const routes = [
  { path: "/", component: HomePage },
  // inscription (choix candidat ou agence sur même page)
  { path: "/registration", component: RegistrationPage },
  // candidat
  { path: "/candidate/connexion", component: CandidateConnexion },
  { path: "/candidate/home", component: CandidateHome },
  { path: "/candidate/profile", component: CandidateProfile },
  { path: "/candidate/apply", component: ApplyOffer },
  // agence
  { path: "/agency/connexion", component: AgencyConnexion },
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
