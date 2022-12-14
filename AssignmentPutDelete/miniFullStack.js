const tbody = document.querySelector("tbody");
const addArtistForm = document.querySelector("#addArtistForm");
const message = document.querySelector("#message");
const addIcon = document.querySelector("#addIcon");
const form = document.querySelector("form");

// Display all artists when the page first loads
fetchDatabase("http://localhost:3000/artist");

// --- SEARCH ARTIST ---
const searchArtist = document.querySelector("#searchArtist");
searchArtist.addEventListener("input", (e) => {
  const searchValue = e.target.value.trim();
  if (searchValue) {
    fetchDatabase(`http://localhost:3000/artist/${searchValue}`);
  } else {
    fetchDatabase(`http://localhost:3000/artist`);
  }
});

// --- ADD ARTIST ---
addArtistForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const artistName = new FormData(addArtistForm);
  fetchDatabase("http://localhost:3000/artist/add", "POST", artistName, message);
  fetchDatabase("http://localhost:3000/artist");
  addArtistForm.reset();
});

// Show addArtist form
addIcon.addEventListener("click", () => {
  form.style.display = "inline";
});

// Function that handles all fetch requests
function fetchDatabase(fetchURL, fetchMethod = "GET", fetchBody = null, responseMessageHolder = null) {
  switch (fetchMethod) {
    // --- GET REQUEST ---
    case "GET":
      fetch(fetchURL)
        .then((res) => res.json())
        .then((data) => {
          // Populate the table with the Artist data from the database
          populateTable(data);
          // --- UPDATE ARTIST ---
          const editIcon = document.querySelectorAll(".editIcon");
          editIcon.forEach((icon) => {
            icon.addEventListener("click", (e) => {
              const artistText = e.target.parentElement.firstChild;
              // If the text is in edit mode, clicking the edit icon will do "PUT" request to update the text
              if (artistText.classList.contains("editMode")) {
                fetchDatabase(`http://localhost:3000/artist/${artistText.dataset.id}`, "PUT", artistText.textContent, message);
              }
              // When the edit icon is clicked, the artist text will become editable and in a different style, and the edit icon will be changed to a check icon
              artistText.classList.toggle("editMode");
              artistText.toggleAttribute("contenteditable");
              artistText.focus();
              icon.classList.toggle("checkIcon");
            });
          });
          // --- DELETE ARTIST ---
          const deleteIcon = document.querySelectorAll(".deleteIcon");
          deleteIcon.forEach((icon) => {
            // When the trashcan icon is clicked, a "DELETE" request will be made with the Artist ID as parameter
            icon.addEventListener("click", (e) => {
              const artistText = e.target.parentElement.firstChild;
              fetchDatabase(`http://localhost:3000/artist/${artistText.dataset.id}`, "DELETE", null, artistText.parentElement);
            });
          });
        });
      break;
    // --- DELETE REQUEST ---
    case "DELETE":
      fetch(fetchURL, { method: fetchMethod })
        .then((res) => res.text())
        .then((data) => {
          responseMessageHolder.innerHTML = data;
          responseMessageHolder.style.color = "red";
        });
      break;
    // --- PUT AND POST REQUEST ---
    case "PUT":
    case "POST":
      fetch(fetchURL, { method: fetchMethod, body: fetchBody })
        .then((res) => res.text())
        .then((data) => {
          responseMessageHolder.innerText = data;
        });
  }
}

// Function to insert the Artist data into the table tag
function populateTable(data) {
  tbody.innerHTML = "";
  if (data.length > 0) {
    data.map((artist) => {
      tbody.innerHTML += `<tr><td><span data-id="${artist.ArtistId}">${artist.Name}</span><i class="editIcon"></i><i class="deleteIcon"></i></td></tr>`;
    });
  } else {
    tbody.innerHTML = `<tr><td style="color: red">Artist not found.</td></tr>`;
  }
}
