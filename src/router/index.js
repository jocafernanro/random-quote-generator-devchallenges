import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Author from "@/views/Author.vue";
import { ROUTES } from "@/utils/CONSTANTS";

Vue.use(VueRouter);

const routes = [
  {
    path: ROUTES.HOME.PATH,
    name: ROUTES.HOME.NAME,
    component: Home
  },
  {
    path: ROUTES.AUTHOR.PATH,
    name: ROUTES.AUTHOR.NAME,
    component: Author
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
