const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

document.getElementById("demo").innerHTML = newArr;

function myFunction(num) {
  return num * 10;
}


var chr = String.fromCharCode(97 + n); // where n is 0, 1, 2 ...