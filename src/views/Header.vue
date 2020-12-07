<template>
    <header>
        <MobileHeader v-if="this.getPageSize === 'mobile'"/>
        <DesktopHeader v-else/>
    </header>
</template>

<script>
import MobileHeader from "../components/Header/MobileHeader.vue";
import DesktopHeader from "../components/Header/DesktopHeader.vue";
import {mapGetters} from "vuex";

export default {
    components: {
        MobileHeader,
        DesktopHeader
    },
    computed: {
        ...mapGetters([
            "getPageSize"
        ])
    },
}
</script>