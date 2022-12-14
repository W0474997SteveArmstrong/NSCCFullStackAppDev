const canvasTag = document.querySelector('canvas');
const ctx = canvasTag.getContext('2d');

let x=5;
let y=5;

function draw(){
    ctx.clearRect(0,0,canvasTag,)
    ctx.fillStyle = 'green'
    ctx.fillRect(x,y,10,10);
    x=x+5;
    y=y+5;
}

setInterval(draw,100);