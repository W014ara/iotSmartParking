<template>
  <div id="app">
    <div class="app__content">
      <Header />
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./views/Header";
import Footer from "./views/Footer";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    Header,
    Footer
  },

  computed: {
    ...mapGetters(["getPageSize", "getReservedPlaceID", "getPlaces"])
  },

  methods: {
    ...mapMutations(["changePageSize", "setReserved"]),
    ...mapActions(["fetchPlaces"])
  },
  created() {
    setInterval(() => {
      this.fetchPlaces();
      if (this.getReservedPlaceID !== null) {
        for (let elem of this.getPlaces) {
          if (
            +elem.id === +this.getReservedPlaceID &&
            elem["occupied"] === false
          ) {
            this.setReserved();
          }
        }
      }
    }, 1000);
  },

  mounted() {
    window.addEventListener("DOMContentLoaded", this.changePageSize);
    window.addEventListener("resize", this.changePageSize);
  },

  destroyed() {
    window.removeEventListener("DOMContentLoaded", this.changePageSize);
    window.addEventListener("resize", this.changePageSize);
  }
};
</script>
