/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  { 
    quote: 'Don\'t criticize what you can\'t understand.',
    source:'Bob Dylan',
    citation:'The Times They Are A-Changin\'',
    year:'1964',
  },
  { 
    quote: 'To be able to look back upon one\'s life in satisfaction is to live twice.',
    source:'Kahlil Gibran',
    citation:'Twitter',
    year:'2021',
  },
  { 
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source:'Nelson Mandela',
    citation:'',
    year:'',
  },
  { 
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    source:'Eleanor Roosevelt',
    citation:'',
    year:'',
  },
  { 
    quote: 'Life is what happens when you\'re busy making other plans.',
    source:'John Lennon',
    citation:'',
    year:'',
  }
];

console.log(quotes);
/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  var length = quotes.length;
  var index = Math.floor(Math.random() * length);
  return quotes[index];

}
console.log(getRandomQuote())
/***
 * `printQuote` function
***/

function printQuote(){
  let randomQuote = getRandomQuote();
  let PtoHTML = "<p class ='quote'>" + randomQuote.quote + "<p class = 'source'>" + randomQuote.source;

if(randomQuote.year!= '' && randomQuote.citation != ''){
  let addHTML = "<span class='citation'>" + randomQuote.citation + "</span>" +
  "<span class ='year'>"+ randomQuote.year + "</span></p>";

  
  document.getElementById('quote-box').innerHTML = PtoHTML.concat(addHTML);
}if(randomQuote.year == '' && randomQuote.citation == ''){
  document.getElementById('quote-box').innerHTML = PtoHTML.concat('</p>');
}

}
console.log(printQuote()); //prev test
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);