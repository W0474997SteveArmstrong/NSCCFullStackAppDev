const tdTags = document.querySelectorAll('td');

for(const tdTag of tdTags){
tdTag.addEventListener('dblclick',makeEditable);
}
function makeEditable(e){
    
    //'dblclick and its properties get displayed in the console'
    console.dir(e.target);
}


