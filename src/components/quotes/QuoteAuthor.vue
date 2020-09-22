<template>
  <div
    class="flex flex-col pl-10 py-10 ml-10 mr-10 hover:bg-gray-700 hover:text-white cursor-pointer"
    @click="goToAuthor"
  >
    <span class="font-bold">{{ author }}</span>
    <span class="text-xs text-gray-500">{{ genre }}</span>
  </div>
</template>

<script>
import { ROUTES } from "@/utils/CONSTANTS";
import { mapActions } from "vuex";

export default {
  name: "QuoteAuthor",
  props: {
    author: String,
    genre: String
  },
  methods: {
    ...mapActions({
      setQuotesByAuthor: "setQuotesByAuthor"
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

<style scoped></style>
