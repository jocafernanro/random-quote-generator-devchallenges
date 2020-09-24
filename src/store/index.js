import Vue from "vue";
import Vuex from "vuex";
import api from "@/api";

import { STORES } from "@/utils/CONSTANTS";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
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
    },
    isLoading(state) {
      return state.loading;
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
    },
    setIsLoading(state, status) {
      state.loading = status;
    }
  },
  actions: {
    async setRandomQuote({ commit }) {
      commit(STORES.SET_IS_LOADING, true);
      const response = await api.getRandomQuote();
      if (response.statusCode === 200)
        commit(STORES.SET_RANDOM_QUOTE, response.quote);
      commit(STORES.SET_IS_LOADING, false);
    },
    async setQuotesByAuthor({ commit }, author) {
      commit(STORES.SET_IS_LOADING, true);
      const response = await api.getQuotesByAuthor(author);
      if (response.statusCode === 200) {
        const quotes = response.quotes.map(quote => quote.quoteText);
        commit(STORES.SET_QUOTES_BY_AUTHOR, quotes);
      }
      commit(STORES.SET_IS_LOADING, false);
    }
  },
  modules: {}
});
