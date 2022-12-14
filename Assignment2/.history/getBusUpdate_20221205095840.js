fetch('https://hrmbuses.azurewebsites.net')
.then(res=>res.json())
.then(jsobj =>{
    for(const busInfo of jsobj.entity){
        console.log("Route ID:",arrData[15].vehicle.trip.routeId);
        console.log("Position:",busInfo.vehicle.trip.routeId);
        console.log("Latitude",busInfo,vehicle.position.latitude);
        console.log("Longitude",busInfo.vehicle.position.longitude);
    }
})