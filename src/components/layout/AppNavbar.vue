<template>
  <div id="nav" class="flex flex-row items-center justify-end mb-10">
    <ui-spinner v-if="isLoading"></ui-spinner>
    <button
      @click="launchRandomQuote"
      class="flex flex-row items-center no-outline refresh-container font-bold"
    >
      random
      <i class="material-icons text-base refresh-rotate ml-2">autorenew</i>
    </button>
  </div>
</template>

<script>
import UiSpinner from "@/components/ui/UiSpinner";
import { mapActions, mapGetters } from "vuex";
import { ROUTES, STORES } from "@/utils/CONSTANTS";
export default {
  name: "AppNavbar",
  components: {
    UiSpinner
  },
  computed: {
    ...mapGetters({
      isLoading: STORES.IS_LOADING
    })
  },
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
