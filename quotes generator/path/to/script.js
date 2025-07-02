const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("autor"); 
const apiUrl = "https://type.fit/api/quotes";

async function getQuote(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    quoteElement.textContent = data[randomIndex].text;
    authorElement.textContent = data[randomIndex].author || "Unknown";
  } catch (error) {
    console.error('Error fetching quote:', error);
    quoteElement.textContent = "Failed to fetch the quote.";
    authorElement.textContent = "";
  }
}

getQuote(apiUrl);

function tweet() {
  const quoteText = quoteElement.textContent;
  const authorText = authorElement.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText} --By ${authorText}`;
  window.open(twitterUrl, "_blank", "width=600,height=300");
}




