console.log('About to fetch a rainbow');

async function somefunctionName(){
    const response = await fetch('img/rainbow.jpg');
    const blob = await response.blob();
   document.getElementById('rainbow').src = URL.createObjectURL(blob);
}
