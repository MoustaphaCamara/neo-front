import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import Banniere from "../components/Banniere.vue";
const routes = [
  { path: "/", component: HomePage },
  { path: "/", component: Banniere },

  //   { path: "/manga/:id", component: Manga, props: true },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;