import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import Frederic from "../components/Frederic.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/fred", component: Frederic },
  //   { path: "/manga/:id", component: Manga, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
