fetch('https://hrmbuses.azurewebsites.net')
.then(res=>res.json())
.then(jsobj =>{
    console.log("jsObj is",)
    for(const busInfo of jsobj.entity){
        console.log("busInfo is",busInfo);
        console.log("Route ID:",busInfo.vehicle.trip.routeId);
        console.log("Position:",busInfo.vehicle.trip.position);
        console.log("Latitude",busInfo,vehicle.position.latitude);
        console.log("Longitude",busInfo.vehicle.position.longitude);
    }
})