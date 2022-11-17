//This doesn't render HTML inside a div.
// document.body.append(document.createElement('div').innerText='<strong>Hello World via createHTML<strong>');


//To render HTML inside div we need to use innerHTML

document.body.append(document.createElement('div')).innerHTML="<strong>Hello World created via inner HTML</strong>")