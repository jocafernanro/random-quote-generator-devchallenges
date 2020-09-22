<template>
  <div id="nav" class="flex flex-row justify-end mt-4">
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
import { ROUTES } from "@/utils/CONSTANTS";
export default {
  name: "AppNavbar",
  methods: {
    ...mapActions({
      setRandomQuote: "setRandomQuote"
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
