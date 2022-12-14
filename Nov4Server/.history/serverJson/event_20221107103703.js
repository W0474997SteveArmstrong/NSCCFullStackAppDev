window.addEventListener('DOMContentLoaded',()=>{
    
    console.log(document.querySelector("#output").innerText);
})

const btnTag = document.getElementById('#fred');
btnTag.addEventListener('click',()=>alert('ouch'))
//When browser finishes loading tree, it fires up the event.

