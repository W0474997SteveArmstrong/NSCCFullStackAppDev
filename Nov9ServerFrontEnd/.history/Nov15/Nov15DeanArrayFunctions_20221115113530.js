const heroes = [

    {name: 'Hulk', strength: 90000},
   
    {name: 'Spider-Man', strength: 25000},
   
    {name: 'Hawk Eye', strength: 136},
   
    {name: 'Thor', strength: 100000},
   
    {name: 'Black Widow', strength: 136},
   
    {name: 'Vision', strength: 5000},
   
    {name: 'Scarlet Witch', strength: 60},
   
    {name: 'Mystique', strength: 120},
   
    {name: 'Namora', strength: 75000},
   
    {name: 'Captain America', strength: 362},
   
    {name: 'Deadpool', strength: 1814},
   
    {name: 'Black Panther', strength: 1814},
   
   ];

   //Example1
   //-------------------------

//    console.log(heroes);

//Example2
//------------------------
//for each element is its name= Vision
//this filter is a boolean expression which checks true or false.
//Since we wrapped a console.log, it will print that particular row when the filter is
//true

// console.log(heroes.filter(e => e.name==='Vision'));


//Example3
//-----------------------

//filter is like a where clause.
// console.log(heroes.filter(e=>e.strength<1000));


//Example4
//----------------------------

// console.log(heroes.filter(e=>e.name.startsWith('S')));


//Example5
//----------------------


// console.log(heroes.some(e=>e.strength==137));


//Example6
//---------------------

//Step1
//console.log(names.forEach());

//Step2
//console.log(names.forEach(x=>x.toUppperCase()));

//Step3
console.log(names.forEach(x=>console.log(first) x.toUppperCase()));



//Example7
//------------------------

//using postman pass json and display that json in front end.
//use post endpoint in serverside.
//try to upload images and other stuff using post




