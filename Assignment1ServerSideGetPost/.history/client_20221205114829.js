const URL = "https://localhost:9999/customer";

const fetchAPI = fetch(URL);
console.log("first")
const fetchAPIAfterFirstStep = fetchAPI.then(res=>res.json());
console.log("fetchAPIAfterFirstStep",fetchAPIAfterFirstStep);