const generateBtn = document.querySelector(".quoteBtn");
const quoteOwnerText = document.querySelector(".quoteOwner");
const quoteText = document.querySelector(".quote");

generateBtn.addEventListener("click", randomQuote);

async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const quote = await response.json()

    console.log(quote);

    quoteText.textContent = quote.content;
    quoteOwnerText.textContent = "-" + quote.author;
}