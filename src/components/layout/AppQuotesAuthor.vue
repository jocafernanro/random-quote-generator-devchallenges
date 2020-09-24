<template>
  <div>
    <button @click="goHome" class="flex flex-row items-center text-gray-500">
      <i class="material-icons -ml-1">keyboard_arrow_left</i>Go back
    </button>
    <h1 class="font-bold text-3xl mt-4 mb-10">{{ author }}</h1>
    <quote v-for="(quote, index) in quotes" :key="index" :text="quote"></quote>
  </div>
</template>

<script>
import { STORES, ROUTES } from "@/utils/CONSTANTS";
import { mapGetters } from "vuex";
import Quote from "@/components/quotes/Quote";

export default {
  name: "AppQuotesAuthor",
  components: {
    Quote
  },
  computed: {
    ...mapGetters({
      quotes: STORES.GET_AUTHOR_QUOTES,
      author: STORES.GET_AUTHOR
    })
  },
  methods: {
    goHome() {
      this.$router.push("/");
    }
  },
  created() {
    if (!this.quotes.length)
      this.$router.push({
        name: ROUTES.HOME.NAME
      });
  }
};
</script>

<style scoped></style>
