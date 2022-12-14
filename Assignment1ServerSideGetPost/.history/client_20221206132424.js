document.getElementById("customerList").addEventListener("click");
const GENRE_URL = "https://localhost:9876/genre";

function updateGenreInfo() {
  const fetchAPI = fetch(URL);
  const fetchAPIAfterStatusCodeAndBooleanCheck = fetchAPI.then((res) => res.json());
  fetchAPIAfterStatusCodeAndBooleanCheck.then((json) => {
    const genreInfo = document.querySelector('#genreInfoList');

    for(const genre of json)
    {
        genreInfo.innerHTML += `
            <b>${genre.GenreId}</b> <b>${genre.Name}</b><br>
        `;
    }

  });
}

updateGenreInfo();
function addNewGenre() {
  alert("Adding new Genre as per your request");
  const fd = new FormData(document.querySelector("form"));
  fetch(GENRE_URL, { method: "POST", body: fd });
}
