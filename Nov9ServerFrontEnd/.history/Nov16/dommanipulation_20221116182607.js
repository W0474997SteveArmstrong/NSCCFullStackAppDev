//Method we use to add elements to the body
const body = document.body

//Two methods we use:
//This works 
//With append, you can work with all of those
//html tags like div etc. as well as strings.
//You can even pass multiple parameters with 
//append

body.append('Hello World line 1---------');
body.append("Hello World line 2","appends this string as well");


//This doesn't work
// body.appendChild("Hello World");
//Why this doesn't work?
//This is because appendChild only works with
//html elements like div and other tags and not
//with like strings.




//



