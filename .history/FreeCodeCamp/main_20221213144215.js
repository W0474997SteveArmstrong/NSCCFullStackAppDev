// Event Listeners

let myP1 = document.getElementById("myP1");
let myP2 = document.getElementById("myP2");
let myDiv1 = document.getElementById("myDiv1");
let myDiv2 = document.getElementById("myDiv2");

//Syntax: element.addEventListener(event,function,useCapture);

myP1.addEventListener("click",function(){myDiv1.style.background="lightblue"});

