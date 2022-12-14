console.log('You are a beautiful server');

// this ---> belongs to object. 
//parameters in the constructor are the inputs we are providing
class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name =givenName;
        this.givenExperience=givenExperience;
        this.givenDivision=givenDivision;
    }
}

steve = new Employee();
console.log(steve)