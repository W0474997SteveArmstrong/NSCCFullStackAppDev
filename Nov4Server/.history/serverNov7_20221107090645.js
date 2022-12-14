const http = require('http');
const PORT = 9876;

console.log("Hello great world");
const output = document.querySelector('#output');

//leaves we use innerText. We append the leaves into the tree.
output.innerHTML = "<strong>Hello</strong>great,happy world"


//react makes a virtual dom for us.
//custom tags.
//build it in html first and then reuse it across the library.

//There is a quiz at the end of the day.

const imgTag = document.createElement('img');

//innerHTML,innerText,
//document.querySelector ------->Grabs query elements.
// .innerText and .innerHTML --->lets you set content/HTML
//document.createElement('img')--->makes HTML tags to place in a page.
//someTag.appendChild(imgTag)-->lets you place the tags you made into the DOM tree.