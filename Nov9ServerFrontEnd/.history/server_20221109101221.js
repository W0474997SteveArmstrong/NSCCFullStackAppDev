window.addEventListener('DOMContentLoaded',()=>{
    fetch('https://dummyjson.com/products/1')
    .then(res=>res.json())
    .then(json=>{
        renderQuotes(json);
    })

    // get json from somewhere, get a function to render that using dom api
    //render the incoming array of JSON objects using DOM API
});

function renderQuotes(json) {
    const divContent = document.querySelector("#output");
    let tmp = "";
    for (let i = 0; i < arrJlength; i++)
      tmp +=
        "<b>" +
        arrJSON[i].quoteAuthor +
        "</b>: " +
        arrJSON[i].quoteText +
        "<br>";
    divContent.innerHTML = tmp;
  }