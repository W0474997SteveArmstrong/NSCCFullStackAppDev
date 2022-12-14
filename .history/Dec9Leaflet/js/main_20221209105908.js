const SATELLITE_URL ='https://api.wheretheiss.at/v1/satellites/25544';
async function  getISS(){
const response = await fetch(SATELLITE_URL);
const data =   response.json();
}