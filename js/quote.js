const collection= [
    {
        quote: "The secret of success is to do the common thing uncommonly well.",
        author: "John D. Rockefeller Jr",
        img: "p1.jpg"
    },
    {
        quote: "The way to get started is to quit talking and begin doing." ,
        author: "Walt Disney",
        img: "p2.jpg"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
        img: "p3.jpg"
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa",
        img: "p4.jpg"
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero",
        img: "p5.jpg"
    },
    {
        quote: "The secret of success is to do the common thing uncommonly well.",
        author: "John D. Rockefeller Jr",
        img: "p1.jpg"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
        img: "p7.jpg"
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "Andre Gide, Autumn Leaves",
        img: "p8.jpg"
    },
    {
        quote: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche",
        img: "p9.jpg"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
        img: "p10.jpg"
    }
]


const quote=document.querySelector("#quote-content span:first-child");
const author= document.querySelector("#quote-content span:last-child");
const authorImg= document.querySelector("#author-img");
const todaysQuote= collection[Math.floor(Math.random()*collection.length)];

authorImg.style.backgroundImage=`url("./quote_img/${todaysQuote.img}")`;
quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;