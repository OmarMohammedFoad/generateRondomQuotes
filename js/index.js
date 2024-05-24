var quote = document.getElementById('quotes');
var author = document.getElementById('author');



const quotes = [
    { author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
    { author: "Maya Angelou", quote: "Still I rise." },
    { author: "Albert Einstein", quote: "The important thing is not to stop questioning. Curiosity has its own reason for existing." },
    { author: "Marie Curie", quote: "One never notices what has been done; one can only see what remains to be done." },
    { author: "Nelson Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
    { author: "Stephen Hawking", quote: "Intelligence is the ability to adapt to change." },
    { author: "Malala Yousafzai", quote: "One child, one teacher, one book, one pen can change the world." },
    { author: "J.K. Rowling", quote: "It is our choices, Harry, that show what we truly are, far more than our abilities." },
    { author: "Elon Musk", quote: "If something is important enough, even if the odds are against you, you should still do it." },
    { author: "Oprah Winfrey", quote: "What I know for sure is that every single experience you have shapes you." }]


function generateQuotes(){
    var randomNum = Math.floor(Math.random() * quotes.length );
    
    quote.innerHTML = quotes[randomNum].quote;
    author.innerHTML = quotes[randomNum].author

    quotes.slice(randomNum,1);
}