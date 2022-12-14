fetch('https://hrmbuses.azurewebsites.net')
.time(res=>res.json())
.then(jsobj =>{
    for(const busInfo of jso)
})