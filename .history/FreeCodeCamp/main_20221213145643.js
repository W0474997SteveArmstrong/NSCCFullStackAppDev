// Event Listeners

let myP1 = document.getElementById("myP1");
let myP2 = document.getElementById("myP2");
let myDiv1 = document.getElementById("myDiv1");
let myDiv2 = document.getElementById("myDiv2");

//Syntax: element.addEventListener(event,function,useCapture);

myP1.addEventListener("click",function(){myP1.style.background="orange"});

myP1.onclick = function(){myP1.style.background="orange"}



