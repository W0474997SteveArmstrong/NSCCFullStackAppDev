document.querySelector("input[type=button]").addEventListener("click",addNewGenre);
const GENRE_URL = "http://localhost:9876/genre";

function updateGenreInfo() {
  const fetchAPI = fetch(GENRE_URL);
  const fetchAPIAfterStatusCodeAndBooleanCheck = fetchAPI.then((res) => res.json());
  fetchAPIAfterStatusCodeAndBooleanCheck.then((json) => {
    const genreInfo = document.querySelector('#genreInfoList');
    // genreInfo.innerHTML = `<br> GenreId Name <br>`;
    
    genreInfo.innerHTML+=`
    <tr>
    <th>
        GenreId
    </th>
    </tr>`
    for(const genre of json)
    {
        genreInfo.innerHTML += `
        
        <tr>
        <td>
        ${genre.GenreId}
        </td>
        <td>
        ${genre.Name}
        </td>
        </tr>
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

function addTable(){

}

function addRow(){
  
}
