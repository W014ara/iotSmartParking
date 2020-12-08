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
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    Header,
    Footer
  },

  computed: {
    ...mapGetters(["getPageSize"])
  },

  methods: {
    ...mapMutations(["changePageSize"])
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
