const tdTags = document.querySelectorAll('td');

for(const tdTag of tdTags){
tdTag.addEventListener('dblclick',makeEditable);
}

document.querySelectorAll()
function makeEditable(e){
    // console.dir(e.target);
    //'dblclick and its properties get displayed in the console'
    // console.dir(e.target);
    //td element and its properties get returned.

    console.log(e.target);
    e.target.setAttribute('contenteditable',true);

}


