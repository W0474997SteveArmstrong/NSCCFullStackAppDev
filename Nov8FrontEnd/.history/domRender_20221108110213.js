window.addEventListener('DOMContentLoaded',()=>{

    const objQuotes = [{
        "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "quoteAuthor": "Thomas Edison"
        }, {
        "quoteText": "You can observe a lot just by watching.",
        "quoteAuthor": "Yogi Berra"
        }, {
        "quoteText": "A house divided against itself cannot stand.",
        "quoteAuthor": "Abraham Lincoln"
        }, {
        "quoteText": "Difficulties increase the nearer we get to the goal.",
        "quoteAuthor": "Johann Wolfgang von Goethe"
        }
    ]
    console.log(JSON.stringify(objQuotes));
    renderQuotes()


    // get json from somewhere, get a function to render that using dom api
    //render the incoming array of JSON objects using DOM API

    function renderQuotes(objQuotes){

       const output = document.querySelector('#output');
       output.innerText = JSo

    }

});
