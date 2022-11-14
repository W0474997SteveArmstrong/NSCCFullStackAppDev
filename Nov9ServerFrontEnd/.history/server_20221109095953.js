window.addEventListener('DOMContentLoaded',()=>{
    fetch('https://raw.githubusercontent.com/Jame')
    .then(res=>res.json())
    .then(objQuotes=>{
        renderQuotes(objQuotes);
    })

    // get json from somewhere, get a function to render that using dom api
    //render the incoming array of JSON objects using DOM API

    function renderQuotes(objQuotes){

       const output = document.querySelector('#output');
       output.innerText = JSON.stringify(objQuotes);
    }

});