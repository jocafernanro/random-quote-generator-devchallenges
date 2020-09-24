<template>
  <div class="mt-10">
    <quote :text="randomQuote.quote"></quote>
    <quote-author
      :author="randomQuote.author"
      :genre="randomQuote.genre"
    ></quote-author>
  </div>
</template>

<script>
import Quote from "@/components/quotes/Quote";
import QuoteAuthor from "@/components/quotes/QuoteAuthor";
import { mapActions, mapGetters } from "vuex";
import { STORES } from "@/utils/CONSTANTS";

export default {
  name: "AppQuoteSingle",
  components: {
    Quote,
    QuoteAuthor
  },
  computed: {
    ...mapGetters({
      randomQuote: STORES.GET_RANDOM_QUOTE
    })
  },
  methods: {
    ...mapActions({
      setRandomQuote: STORES.SET_RANDOM_QUOTE
    })
  },
  async mounted() {
    if (!this.randomQuote.quote) await this.setRandomQuote();
  }
};
</script>

<style scoped></style>
