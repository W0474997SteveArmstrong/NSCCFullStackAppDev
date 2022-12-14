window.addEventListener('DOMContentLoaded',()=>{
    
    console.log(document.querySelector("#output").innerText);
})

//getElementById u don't have to put # symbol since it is already known that 
//parameter is Id.
const btnTag = document.getElementById('fred');
btnTag.addEventListener('click',doSomething);
//When browser finishes loading tree, it fires up the event.



function doSomething(event){
    alert('ouchie!');
    console.dir(event);
}

