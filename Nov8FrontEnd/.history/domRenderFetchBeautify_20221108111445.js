window.addEventListener('DOMContentLoaded',()=>{
    fetch('https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json')
    .then(res=>res.json())
    .then(objQuotes=>{
        renderQuotes(objQuotes);
    })

 

});
