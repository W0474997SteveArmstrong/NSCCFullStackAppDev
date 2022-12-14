fetch('https://hrmbuses.azurewebsites.net')
.then(res=>res.json())
.then(jsobj =>{
    for(const busInfo of jsobj.entity){
        console.log("Route ID:",busInfo.vehicle.trip.routeId);
        console.log("Route ID:",busInfo.vehicle.trip.routeId);
        console.log("Latitude",busInfo,vehicle.position.latitude);
        console.log("Longitude",busInfo.vehicle.position.longitude);
    }
})