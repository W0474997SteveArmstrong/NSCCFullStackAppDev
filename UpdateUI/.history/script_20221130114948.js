const tdTags = document.querySelectorAll('td');

for(const tdTag of tdTags){
tdTag.addEventListener('dblclick',makeEditable);
}
function makeEditable(e){
    console.dir(e);
}


