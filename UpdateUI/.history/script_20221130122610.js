const tdTags = document.querySelectorAll("td");

for (const tdTag of tdTags) {
  tdTag.addEventListener("dblclick", makeEditable);
}

const btns = document.querySelectorAll("button");

for (const btn of btns) {
  btn.addEventListener("click", doUpdate);
}
function doUpdate(e) {
  const allIds = e.target.parentElement.parentElement.children;
  const updateJSON = {};
  updateJSON.EmpID = allIds[0].textContent;
  updateJSON.FirstName = allIds[1].textContent;
  updateJSON.LastName = allIds[2].textContent;
  updateJSON.Email = allIds[3].textContent;
  console.log(JSON.stringify(updateJSON));

  //fetch(url,{method:'put',body:updateJSON})
}
function makeEditable(e) {
  // console.dir(e.target);
  //'dblclick and its properties get displayed in the console'
  // console.dir(e.target);
  //td element and its properties get returned.

  console.log(e.target);
  e.target.setAttribute("contenteditable", true);
}
