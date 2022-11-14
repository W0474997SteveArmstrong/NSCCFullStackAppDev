const div = document.querySelector("div");
const h1 = document.querySelector("h1");
const h3 = document.querySelector("h2");
const p = document.querySelector("p");

fetch('https://dummyjson.com/products/')
    .then(res=>res.json())
    .then((json)=>{
        for (let index = 0; index < json.products.length; index++) {
            div.innerHTML += `
            `
            
        }
    })