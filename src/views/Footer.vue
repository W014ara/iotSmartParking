<template>
  <footer>
    <MobileFooter v-if="this.getPageSize === 'mobile'" />
    <DesktopFooter v-else />
  </footer>
</template>

<script>
import MobileFooter from "../components/Footer/MobileFooter";
import DesktopFooter from "../components/Footer/DesktopFooter";
import { mapGetters } from "vuex";

export default {
  components: {
    MobileFooter,
    DesktopFooter
  },
  computed: {
    ...mapGetters(["getPageSize"])
  }
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  z-index: 999;
}
</style>
