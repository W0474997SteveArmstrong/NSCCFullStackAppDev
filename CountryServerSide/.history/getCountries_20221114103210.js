//grab country data

//Asynchronous 
//We are parsing json using res.json()
//document.querySelector('pre) ----> to get the data in pre. same thing happens when
//we use res.json()

//

fetch("https://restcountries.com/v2/all")
.then(res=>res.json())
.then(data=>{

    // document.querySelector('#countries').innerText = data
    //The result we get in the browser is [object Object],
    //[object Object],[object Object],[object Object],[object Object],[object Object

    //To actually get data instead of getting [object Object];
    //we use

    document.querySelector('#countries').innerText = `
    <h1>${data[3].name}</h1>
    <h2></h2>
    <img></img>


    //code goes here
})