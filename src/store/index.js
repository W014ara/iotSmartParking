import Vue from "vue";
import Vuex from "vuex";
import page from "./modules/page";
import place from "./modules/place";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    page,
    place
  }
});
