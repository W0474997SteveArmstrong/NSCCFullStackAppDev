document.getElementById('customerList').addEventListener('click',)
const URL = "https://localhost:9999/customer";

const fetchAPI = fetch(URL);
console.log("fetchAPI",fetchAPI);
const fetchAPIAfterFirstStep = fetchAPI.then(res=>res.json());
console.log("fetchAPIAfterFirstStep",fetchAPIAfterFirstStep);
fetchAPIAfterFirstStep.then(json=>{ });

function addNewGenre(){
    
}