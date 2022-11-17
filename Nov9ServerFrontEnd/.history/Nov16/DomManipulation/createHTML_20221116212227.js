//This doesn't render HTML inside a div.
document.body.append(document.createElement('div').innerText='<strong>Hello World via createHTML<strong>');