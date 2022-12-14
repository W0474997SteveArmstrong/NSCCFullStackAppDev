//ICA - Array Functions - Full Stack Front End Programming 

// Using the data retrieved from the API Endpoint, 
// write a function called 'getPopulation' that returns the total population
// for all countries that BOTH border China
// and list English as one of their official languages

//NOTE: You are NOT permitted to use FOR, FOREACH, or WHILE loops of any kind.
//      You must leverage the available JavaScript Array Iteration Functions to accomplish your goal.
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods


//IIFE: Immediately Invoked Function Expression

(function(){
fetch(`https://restcountries.com/v2/all`)
        .then(response => response.json())
        .then(json => {
            pop = json;

            console.log(pop)
            console.dir(getPopulation(json));

            //DO NOT MODIFY THIS CODE
            console.dir(`TOTAL POPULATION: ${ getPopulation(json) }`);
            //Assert --->if true then it doesn't do anything, but if false then 
            //it prints the text on the right.
            console.assert( getPopulation(json) === 1608378516, "Incorrect population total returned by getPopulation function" );

        })

    //WRITE YOUR FUNCTION BELOW THIS LINE

    function getPopulation(json){
        return json.filter(countries=>countries.borders) //grab only countries which have border
        .filter(countries=>countries.borders.includes("CHN"))//after grabbing countries which have border,grab only those countries which border China
        .filter(countries=>countries.languages.filter((language)=>language.name=="English").length==1) //grab only those China bordering countries where language is 
        //a property and only select those countries which have English as the official language
        .reduce((populationCount,country)=>(populationCount+=country.population),0); //get the count of their population

    }
}) ();




//pop.filter(x=>x.borders!=undefined)  checks for undefined. Some of our items don't have border property. So we only need
// work with items which have a border and that border has to be equal to China.

//pop.filter(x=>x.borders).filter(x=>x.borders.includes('CHN'));

//open and close paranthesis to make it an anonymous function and then invoke the function by ()