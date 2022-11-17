// const body = document.body;

// //This creates a reference to a div element
// const divElem = document.createElement('div');

// //This adds the divElem to our html i.e append the element to the body.
// body.append(divElem);

// //Add text to our divElem

// divElem.innerText='Hello World';


//To write in one line:
// document.body.append(document.createElement('div').innerText='HelloWorld');



//Practice without seeing:

// const body = document.body;
// const divElem = document.createElement('div');
// body.append(divElem.innerText='Hello World');




//Practice without seeing 2:

//textContent only uses the visible text and if d
document.body.append(document.createElement('div').innerText='Hello Beautiful World');


//here we can replace innerText with textContent and it will still work.
//textContent shows both invisible and visible texts by picking straight from the html,
//thereby ignoring the css
document.body.append(document.createElement('div').textContent='Hello Beautiful World');

