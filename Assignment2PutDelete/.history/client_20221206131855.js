document.getElementById("customerList").addEventListener("click");
const genreURL = "https://localhost:9876/genre";

function updateGenreInfo() {
  const fetchAPI = fetch(URL);
  console.log("fetchAPI", fetchAPI);
  const fetchAPIAfterStatusCodeAndBooleanCheck = fetchAPI.then((res) => res.json());
  console.log("fetchAPIAfterFirstStep", fetchAPIAfterFirstStep);
  fetchAPIAfterStatusCodeAndBooleanCheck.then((json) => {
    const customerData = document.querySelector('#customerList');

    for(const cust of json)
    {
        customerData.innerHTML += `
            <b>${cust.FirstName}</b> <b>${cust.LastName}</b><br>
        `;
    }

  });
}

function addNewGenre() {
  alert("Adding new Genre as per your request");
  const fd = new FormData(document.querySelector("form"));
  fetch(URL, { method: "POST", body: fd });
}
