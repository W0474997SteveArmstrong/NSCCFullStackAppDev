const tdTags = document.querySelectorAll('td');

for(const tdTag of tdTags){
tdTag.addEventListener('dblclick',why);
}
function why(){
    alert('hey');
}


