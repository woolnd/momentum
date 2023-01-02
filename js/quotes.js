const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Where there is a will there is a way.",
        author: "Angela Merkel",
    },
    {
        quote: "Life is a journey.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Don't dream, Be it.",
        author: "Tim curry",
    },
    {
        quote: "No pain, No gain.",
        author: "Benjamin Franklin",
    },
    {
        quote: "The die is cast.",
        author: "Julius Caesar",
    },
    {
        quote: "The will of man is his happiness.",
        author: "Friedrich von schiller",
    },
    {
        quote: "This too shall pass away.",
        author: "Abraham Lincoln",
    },
    {
        quote: "When in doubt, choose change.",
        author: "Lily Leung",
    },
    {
        quote: "Time is flying never to return.",
        author: "Virgil",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]; //floor은 1.1인경우 1로 반환 소숫점 버림이고 random(0~9) 숫자로 명언 랜덤 표시

quote.innerText = todaysQuote .quote;
author.innerText = todaysQuote .author;