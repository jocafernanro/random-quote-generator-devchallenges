<template>
  <div class="">
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
export default {
  name: "AppQuoteSingle",
  components: {
    Quote,
    QuoteAuthor
  },
  computed: {
    ...mapGetters({
      randomQuote: "getRandomQuote"
    })
  },
  methods: {
    ...mapActions({
      setRandomQuote: "setRandomQuote"
    })
  },
  async mounted() {
    if (!this.randomQuote.quote) await this.setRandomQuote();
  }
};
</script>

<style scoped></style>
