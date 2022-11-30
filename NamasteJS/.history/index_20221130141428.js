const radius = [1,2,3,4];

const calculateArea = function (radius){
    let output =[];
    for(i =0;i<radius.length;i++){
        output.push(Math.PI * (radius[i] )**2);
   }
   return output;
}
console.log("The Area is",calculateArea(radius));

const circumferenceCalc = function (radius){
    let circumference = [];
    for(i=0;i,radius.length;i++){
        circumference.push(2* Math.PI *radius[i]);
    }
}
console.log("The circumference is",circumferenceCalc(radius));