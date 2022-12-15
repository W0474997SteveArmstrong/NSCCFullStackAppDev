document.querySelector("#addGenreBtn").addEventListener("click", addNewGenre);
const GENRE_URL = `http://localhost:9876/genre`;

function addEventListeners() {
  const allUpdateBtns = document.querySelectorAll(".edit-genre-btn");
  allUpdateBtns.forEach((updBtn) => {
    updBtn.addEventListener("click", handleGenreEdit);
  });
  const allDeletebtns = document.querySelectorAll(".delete-genre-btn");
  allDeletebtns.forEach((delBtn) => {
    delBtn.addEventListener("click", handleGenreDel);
  });
}

function getGenreInfo() {
  const fetchAPI = fetch(GENRE_URL);
  const fetchAPIAfterStatusCodeAndBooleanCheck = fetchAPI.then((res) =>
    res.json()
  );
  fetchAPIAfterStatusCodeAndBooleanCheck.then((json) => {
    let innerTbodyHTML = "";
    const genreInfo = document.querySelector("#genreInfoList");
    for (const genre of json) {
      innerTbodyHTML += `
        <tr>
        <td>
        ${genre.GenreId}
        </td>
        <td contenteditable="true">
        ${genre.Name}
        </td>
        <td>
        <button class="edit-genre-btn" data-genre-id=${genre.GenreId}>
        Update
        </button>
        <button class="delete-genre-btn" data-genre-id=${genre.GenreId}>
        Delete
        </button>
        </td>
        </tr>
        `;
    }
    genreInfo.innerHTML = innerTbodyHTML;
    addEventListeners();
  });
}

getGenreInfo();

function handleGenreDel(e) {
  e.preventDefault();
  const genreIdDel = e.target.getAttribute("data-genre-id");
  const reqBody = {
    GenreId: genreIdDel,
  };
  const reqOptions = {
    method: "delete",
    body: JSON.stringify(reqBody),
  };
  fetch(GENRE_URL + `/${genreIdDel}`, reqOptions);
}

function handleGenreEdit(e) {
  e.preventDefault();
  const genreId = e.target.getAttribute("data-genre-id");
  const currentGenreName =
    e.target.parentElement.parentElement.children[1].innerText;
  const reqBody = {
    Name: currentGenreName,
  };
  const reqOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(reqBody),
  };
  fetch(GENRE_URL + `/${genreId}`, reqOptions);
}

function addNewGenre() {
  alert("Adding new Genre as per your request");
  const fd = new FormData(document.querySelector("form"));
  fetch(GENRE_URL, { method: "POST", body: fd });
}
