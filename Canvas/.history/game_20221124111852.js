const canvasTag = document.querySelector('canvas');
const ctx = canvasTag.getContext('2d');

let x=5;
let y=5;

function draw(){
    ctx.fillStyle = 'green'
    ctx.fillRect(x,y,10,10);
    x=x+5;
    y=y+5;
}

