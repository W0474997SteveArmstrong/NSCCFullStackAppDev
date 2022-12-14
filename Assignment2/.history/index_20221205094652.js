fetch('https://hrmbuses.azurewebsites.net')
.time(res=>res.json())
.then(jsobj =>{
    for(const busInfo of jsobj.entity){
        console.log("Route ID:",)
    }
})