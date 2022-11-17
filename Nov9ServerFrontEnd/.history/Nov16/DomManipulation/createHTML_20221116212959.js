//This doesn't render HTML inside a div.
//To create inner HTML, 
// document.body.append(document.createElement('div').innerText='<strong>Hello World via createHTML<strong>');


//To render HTML inside div we need to use innerHTML

const div = document.createElement("div")

div.innerHTML = "<strong>Hello World created via inner HTML yo</strong>";
document.body.append(div);