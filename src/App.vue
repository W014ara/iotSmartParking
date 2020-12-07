<template>
  <div id="app">
    <Header />
    <Header />
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

  created(){
    window.addEventListener("resize", this.changePageSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.changePageSize);
  },
}
</script>

<style lang="scss">
  @import url("./styles/loader.scss");
</style>