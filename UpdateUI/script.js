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
  alert(allIds[0].textContent);
  alert(allIds[2].textContent);
}
function makeEditable(e) {
  // console.dir(e.target);
  //'dblclick and its properties get displayed in the console'
  // console.dir(e.target);
  //td element and its properties get returned.

  console.log(e.target);
  e.target.setAttribute("contenteditable", true);
}
