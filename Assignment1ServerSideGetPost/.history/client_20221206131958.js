document.getElementById("customerList").addEventListener("click");
const GENRE_URL = "https://localhost:9876/genre";

function updateGenreInfo() {
  const fetchAPI = fetch(URL);
  const fetchAPIAfterStatusCodeAndBooleanCheck = fetchAPI.then((res) => res.json());
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
  fetch(GENRE_URL, { method: "POST", body: fd });
}
