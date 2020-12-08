import Vue from "vue";
import VueRouter from "vue-router";
import ErrorPage from "../components/404.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "home",
    component: Home
  },

  {
    path: "*",
    name: "404",
    component: ErrorPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
