const radius = [1,2,3,4];
const calculateAr function (radius){
    let output =[];
    for(i =0;i<radius.length;i++){
        output.push(Math.PI * (radius[i] )**2);
   }
   return output;
}
console.log(calculateArea(radius));