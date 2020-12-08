<template>
  <div id="app">
    <div class="app__content">
      <Header />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./views/Header.vue";
import {mapGetters, mapMutations} from "vuex";

export default {
  components:{
    Header
  },

  computed: {
   ...mapGetters([
     "getPageSize"
     ])
  },

  methods: {
    ...mapMutations([
      'changePageSize'
    ]),
  },
  mounted(){
    window.addEventListener("DOMContentLoaded", this.changePageSize);
    window.addEventListener("resize", this.changePageSize);
  },

  destroyed() {
    window.removeEventListener("DOMContentLoaded", this.changePageSize);
    window.addEventListener("resize", this.changePageSize);
  },
}
</script>