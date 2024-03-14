var quotes = ['Why do they call it oven when you of in the cold food of out hot eat the food?', 'Toasters. That\'s it, that\'s the quote.', 'huhu yo', 'nah, i\'d win.', '86', 'Remember: ', 'DOMAIN EXPANSION SHITTY WEBSITE', 'want to see more quotes? refresh the page or wait for me to update this'];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
