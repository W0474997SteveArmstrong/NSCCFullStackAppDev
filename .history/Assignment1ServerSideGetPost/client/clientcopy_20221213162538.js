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
    cell.addEventListener('dblclick',(e)=>
      e.target.parentElement.setAttribute('contenteditable',true)
    );
  }
  const updateBtns = document.querySelectorAll('button');
    for(const btn of updateBtns){
        btn.addEventListener('click',(e)=>edit(e.target));
    }
}


function edit(e){
  const data = e.parentElement.parentElement.children;
  const GenreId =data[0].innerText;
  
  let jsonData = {};
  jsonData['Name'] = data[1].innerText;
  jsonData = JSON.stringify(jsonData);
  console.dir(jsonData);
  fetch('http://localhost:9876/genre'+GenreId,
  {
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
      method:'put',
      body:jsonData
  })
  updateGenreInfo();
}

updateGenreInfo();
function addNewGenre() {
  alert("Adding new Genre as per your request");
  const fd = new FormData(document.querySelector("form"));
  fetch(GENRE_URL, { method: "POST", body: fd });
}
