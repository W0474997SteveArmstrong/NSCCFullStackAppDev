window.addEventListener('DOMContentLoaded',()=>{
    fetch('https://dummyjson.com/products/1')
    .then(res=>res.json())
    .then(json=>{
        console.log(json);
        const divTag = document.querySelector('#content');

        // let tmp='';
        // tmp += "<h3>" json.title+ "</h3>";

        divTag.innerHTML =''

        

    })
});

