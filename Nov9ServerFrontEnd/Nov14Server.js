//requires and setup
window.addEventListener('DOMContentLoaded',()=>{
    fetch('https://dummyjson.com/products/1')
    .then(res=>res.json())
    .then(json=>{
        renderQuotes(json);
    })
});

function renderQuotes(json){
    const output =  document.querySelector('#output');
    output.innerText =JSON.stringify(json);
}



//implementation of endpoints
//GET that takes /math/:num1/add/:num2




//bind to port
