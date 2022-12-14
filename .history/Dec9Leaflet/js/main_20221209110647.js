const SATELLITE_URL ='https://api.wheretheiss.at/v1/satellites/25544';

async function  getISS(){
const response = await fetch(SATELLITE_URL);
const data = await response.json();
console.log('data is',data);
console.log('latitude is',data.latitude);
console.log('longitude is',data.longitude);

console.log('----------------------------');
console.log('Alternate way of doing things through Javascript Destructuring');
console.log(' ');

const {latitude,longitude} = 




}

getISS();

