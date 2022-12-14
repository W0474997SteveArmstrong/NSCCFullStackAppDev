
//Here p stands for promise
const url = "https://www.gamedeveloper.com/disciplines/security-in-online-games";
let p =fetch(url);

p.then((value1)=>{
    return value1;
}).then((value2)=>{value2.json})








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

//Getting the response invloves Http Status Code 200 and OK (OK is for when value is between 200-209 
//and boolean is true in this scenario)

//Another method is called to access the body in different formats 

//