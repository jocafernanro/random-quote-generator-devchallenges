import Vue from "vue";
import Vuex from "vuex";
import api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    randomQuote: {
      quote: undefined,
      author: undefined,
      genre: undefined
    },
    authorQuotes: []
  },
  getters: {
    getRandomQuote(state) {
      return state.randomQuote;
    },
    getAuthorQuotes(state) {
      return state.authorQuotes;
    },
    getAuthor(state) {
      return state.randomQuote.author;
    }
  },
  mutations: {
    setRandomQuote(state, quote) {
      state.randomQuote.quote = quote.quoteText;
      state.randomQuote.author = quote.quoteAuthor;
      state.randomQuote.genre = quote.quoteGenre;
    },
    setQuotesByAuthor(state, quotes) {
      state.authorQuotes = quotes;
    }
  },
  actions: {
    async setRandomQuote({ commit }) {
      const response = await api.getRandomQuote();
      if (response.statusCode === 200) commit("setRandomQuote", response.quote);
    },
    async setQuotesByAuthor({ commit }, author) {
      const response = await api.getQuotesByAuthor(author);
      if (response.statusCode === 200) {
        const quotes = response.quotes.map(quote => quote.quoteText);
        commit("setQuotesByAuthor", quotes);
      }
    }
  },
  modules: {}
});
