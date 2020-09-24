<template>
  <div id="nav" class="flex flex-row justify-end mb-10">
    <button
      @click="launchRandomQuote"
      class="flex flex-row items-center no-outline refresh-container"
    >
      random <i class="material-icons text-base refresh-rotate">autorenew</i>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { ROUTES, STORES } from "@/utils/CONSTANTS";
export default {
  name: "AppNavbar",
  methods: {
    ...mapActions({
      setRandomQuote: STORES.SET_RANDOM_QUOTE
    }),
    async launchRandomQuote() {
      await this.setRandomQuote();
      if (this.$route.name !== ROUTES.HOME.NAME)
        this.$router.push({
          name: ROUTES.HOME.NAME
        });
    }
  }
};
</script>

<style scoped>
.refresh-container:hover .refresh-rotate {
  animation: rotate-center 0.6s ease-in-out both;
}
</style>
