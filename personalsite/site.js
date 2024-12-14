import motivation from "./site.mjs";

document.addEventListener("DOMContentLoaded", function () {

  // Quotes functionality
  const quotesContainer = document.querySelector(".quotes-container");
  const nextQuoteButton = document.querySelector(".next-quote-button");
  const filterInput = document.querySelector(".filter-input");

  // Function to display a random quote
  const displayRandomQuote = () => {
    if (!motivation.length) {
      quotesContainer.innerHTML = "<p>No quotes available.</p>";
      return;
    }
    const randomIndex = Math.floor(Math.random() * motivation.length);
    const quote = motivation[randomIndex];
    quotesContainer.innerHTML = `
      <blockquote>
        <p>"${quote.quote}"</p>
        <footer>- ${quote.author}</footer>
      </blockquote>
    `;
  };

  // Function to display all quotes
  const displayAllQuotes = () => {
    quotesContainer.innerHTML = motivation
      .map(
        (quote) => `
      <blockquote>
        <p>"${quote.quote}"</p>
        <footer>- ${quote.author}</footer>
      </blockquote>
    `
      )
      .join("");
  };

  // Function to filter quotes based on author
  const filterQuotes = (author) => {
    const filteredQuotes = motivation.filter((quote) =>
      quote.author.toLowerCase().includes(author.toLowerCase())
    );
    quotesContainer.innerHTML = filteredQuotes
      .map(
        (quote) => `
      <blockquote>
        <p>"${quote.quote}"</p>
        <footer>- ${quote.author}</footer>
      </blockquote>
    `
      )
      .join("");
  };

  // Event listener for the next quote button
  nextQuoteButton.addEventListener("click", displayRandomQuote);

  // Event listener for the filter input
  filterInput.addEventListener("input", (event) => {
    const author = event.target.value;
    if (author) {
      filterQuotes(author);
    } else {
      displayRandomQuote();
    }
  });

  // Display a random quote on page load
  displayRandomQuote();

});
