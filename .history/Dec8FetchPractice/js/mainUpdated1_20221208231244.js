console.log('About to fetch a rainbow using the updated code');

async function somefunctionName(){
    const response = await fetch('img/rainbow.jpg');
    console.log('response is',response);
    const blob = await response.blob();
    console.log('blob is',blob);
//    document.getElementById('rainbow').src = URL.createObjectURL(blob);
}
somefunctionName().then
(response=>
    {console.log('Yay');
}
).
catch(error=>
    {
    console.log('error!');
    console.error(error);
    }
    )

