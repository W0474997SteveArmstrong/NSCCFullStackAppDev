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
    Update Action
    </th>
    <th>
    Delete Action
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
        <td>
        <button class='delete_btn'>
        Delete
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
    const deleteBtns = document.querySelectorAll('.delete_btn');
    for (const btn of deleteBtns) {
      //Might have to uncomment this later
      // btn.addEventListener("click", (e) => deleteGenre(e.target));
      btn.addEventListener("click", (e) =>{
      const genreText = e.target.parentElement.firstChild;
      console.log('genreText is',genreText);
    });
}
}
function deleteGenre(e) {
  console.log(e.value);
  fetch("http://localhost:9876/genre/" + e.value, { method: "delete" });
}

function edit(e){
  const data = e.parentElement.parentElement.children;
  const GenreId =data[0].innerText;
  console.log('GenreId inside edit is',GenreId);
  let jsonData = {};
  jsonData['Name'] = data[1].innerText;
  jsonData = JSON.stringify(jsonData);
  console.dir(jsonData);
  fetch('http://localhost:9876/genre/'+GenreId,
  {
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*'
          header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
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
