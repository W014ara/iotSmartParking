<template>
  <section class="app__main">
    <MobileHome v-if="this.getPageSize === 'mobile'" />
    <DesktopHome v-else />
  </section>
</template>

<script>
import MobileHome from "../components/Home/MobileHome";
import DesktopHome from "../components/Home/DesktopHome";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    MobileHome,
    DesktopHome
  },
  computed: {
    ...mapGetters(["getPageSize"])
  },
  methods: {
    ...mapMutations(["setNewUrl"])
  }
};
</script>

<style lang="scss" scoped>
.app__main {
  position: relative;
  width: 100%;
  height: 100%;
  background: #0392a6;
}
</style>
