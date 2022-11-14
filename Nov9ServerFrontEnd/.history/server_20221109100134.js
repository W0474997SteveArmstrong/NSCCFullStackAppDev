window.addEventListener('DOMContentLoaded',()=>{
    fetch('https://dummyjson.com/products/1')
    .then(res=>res.json())
    .then(json=>{
        console.log(json);
    })

    // get json from somewhere, get a function to render that using dom api
    //render the incoming array of JSON objects using DOM API

    function renderQuotes(objQuotes){

       const output = document.querySelector('#output');
       output.innerText = JSON.stringify(objQuotes);
    }

});