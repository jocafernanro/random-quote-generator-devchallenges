<template>
  <div>
    <h1 class="font-bold text-xl mt-4 mb-10">{{ author }}</h1>
    <quote v-for="(quote, index) in quotes" :key="index" :text="quote"></quote>
    <quote></quote>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Quote from "@/components/quotes/Quote";
import { ROUTES } from "@/utils/CONSTANTS";
export default {
  name: "AppQuotesAuthor",
  components: {
    Quote
  },
  computed: {
    ...mapGetters({
      quotes: "getAuthorQuotes",
      author: "getAuthor"
    })
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
