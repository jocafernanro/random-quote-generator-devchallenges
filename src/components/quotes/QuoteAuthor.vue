<template>
  <div
    class="flex flex-row items-center justify-between pl-8 sm:pl-20 py-10 hover:bg-gray-900 hover:text-white cursor-pointer author-container"
    @click="goToAuthor"
  >
    <div class="flex flex-col">
      <span class="font-bold">{{ author }}</span>
      <span class="text-xs text-gray-500">{{ genre }}</span>
    </div>
    <i class="material-icons mr-10 hidden author-arrow">arrow_right_alt</i>
  </div>
</template>

<script>
import { ROUTES, STORES } from "@/utils/CONSTANTS";
import { mapActions } from "vuex";

export default {
  name: "QuoteAuthor",
  props: {
    author: String,
    genre: String
  },
  methods: {
    ...mapActions({
      setQuotesByAuthor: STORES.SET_QUOTES_BY_AUTHOR
    }),
    async goToAuthor() {
      await this.setQuotesByAuthor(this.author);
      this.$router.push({
        name: ROUTES.AUTHOR.NAME
      });
    }
  }
};
</script>

<style scoped>
.author-container:hover .author-arrow {
  display: block;
}

.author-container:hover {
  animation: fade-in 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
</style>
