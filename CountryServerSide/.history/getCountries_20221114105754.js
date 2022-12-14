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

    for (let i = 0; index < data.length; i++) {
        document.querySelector('#countries').innerHTML+= `
    <h1>${data[i].name}</h1>
    <h2>${data[i].capital}</h2>
    <img src=${data[i].flag}>
`;
        
    }
    
    //code goes here
})