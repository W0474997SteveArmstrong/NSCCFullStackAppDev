console.log('About to fetch a rainbow');

async function somefunctionName(){
    fetch(img/);
}
fetch('img/rainbow.jpg').then(response=>{
  console.log(response);
return response.blob();
}).then(blob=>{
  console.log(blob);
document.getElementById('rainbow').src=URL.createObjectURL(blob);
});
