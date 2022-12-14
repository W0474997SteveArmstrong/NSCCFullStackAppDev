
//Here p stands for promise
const url = "https://goweather.herokuapp.com/weather/Ny";
let p =fetch(url);

p.then((value1)=>
    // value1.headers('Access-Control-Allow-Origin','*')
     value1.json()).then((value2)=> console.log(value2))








//-----------------------------
//Steps
//const url = "";
// let p = fetch(url);
//p.then()
//p.then(()=>{})
//p.then(()=>{})


//This is a function on its own.

// p.then((value1)=>{
//     return value1;
// })

//This is another function
// .then((value2)=>{value2.json})

//fetch is used to get data over the internet

//Getting the response involves a two stage process. Then first function gives us
// the http Status Code and the boolean value.
// Http Status Code 200 and OK (OK is for when value is between 200-209 
//and boolean is true in this scenario)

//Another method is called to access the body in different formats.
//We can 
//either use 
//response.text() to read and return the text.
//response.json() to parse the response as a JSON

//We can only use one of the above methods at a time. If one of the above methods is already used for
//body parsing, then the other won't work.




