//grab country data

//Asynchronous 
//We are parsing json using res.json()
//document.querySelector('pre) ----> to get the data in pre. same thing happens when
//we use res.json()

//

fetch("restcountries.com/")
.then(res=>res.json())
.then(data=>{

    //code goes here
})