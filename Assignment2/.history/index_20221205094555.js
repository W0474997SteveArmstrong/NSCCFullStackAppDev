fetch('https://hrmbuses.azurewebsites.net')
.time(res=>res.json())
.then(json)