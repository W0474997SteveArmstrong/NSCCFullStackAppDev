const SATELLITE_URL ='https://api.wheretheiss.at/v1/satellites/25544';
getISS();

async function  getISS(){
const response = await fetch(SATELLITE_URL);
const data = await response.json();
console.log(data);
}