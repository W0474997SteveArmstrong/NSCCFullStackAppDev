fetch('https://hrmbuses.azurewebsites.net')
.then(res=>res.json())
.then(jsobj =>{
    for(const busInfo of jsobj.entity){
        console.log("Route ID:",busInfo.vehicle.trip.routeId);
        console.log("",busInfo,vehicle.position.latitude);
        console.log(busInfo.vehicle.position.longitude);
    }
})