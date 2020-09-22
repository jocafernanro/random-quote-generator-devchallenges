const apiUrl = "https://quote-garden.herokuapp.com/api/v2";
const getRandomQuote = () =>
  fetch(`${apiUrl}/quotes/random`).then(response => response.json());

const getQuotesByAuthor = authorName =>
  fetch(`${apiUrl}/authors/${authorName}?page=1&limit=10`).then(response =>
    response.json()
  );

export default { getRandomQuote, getQuotesByAuthor };
