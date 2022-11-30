const radius = [1,2,3,4];
let output =[];

function calculateArea(radius){
    for(i =0;i<radius.length;i++){
        output.push(Math.PI * (radius[i] )**2);
   }
}
console.log(calculateArea(radius));