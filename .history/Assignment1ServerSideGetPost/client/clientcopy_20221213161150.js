document.querySelector("input[type=button]").addEventListener("click",addNewGenre);
const GENRE_URL = "http://localhost:9876/genre";

function updateGenreInfo() {
  const fetchAPI = fetch(GENRE_URL);
  const fetchAPIAfterStatusCodeAndBooleanCheck = fetchAPI.then((res) => res.json());
  fetchAPIAfterStatusCodeAndBooleanCheck.then((json) => {
    const genreInfo = document.querySelector('#genreInfoList');
    genreInfo.innerHTML+=`
    <tr>
    <th>
        GenreId
    </th>
    <th>
        Name
    </th>
    <th>
    Action
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
        <td>
        <button>
        Update
        </button>
        </td>
        </tr>
        `;
    }
    addEventListeners();
  });
}

function addEventListeners(){
  const cells = document.querySelectorAll('td');
  for(const cell of cells){
    cell.addEventListener('click',(e)=>{
      e.target.parent.parent
    })
  }
}

updateGenreInfo();
function addNewGenre() {
  alert("Adding new Genre as per your request");
  const fd = new FormData(document.querySelector("form"));
  fetch(GENRE_URL, { method: "POST", body: fd });
}
