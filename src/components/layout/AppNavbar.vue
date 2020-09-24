<template>
  <div id="nav" class="flex flex-row justify-end mb-10">
    <button
      @click="launchRandomQuote"
      class="flex flex-row items-center no-outline"
    >
      random <i class="material-icons text-base">autorenew</i>
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

<style scoped></style>
