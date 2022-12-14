console.log('You are a beautiful server');

// this ---> belongs to object. 
//parameters in the constructor are the inputs we are providing
class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name =givenName;
        this.givenExperience=givenExperience;
        this.givenDivision=givenDivision;
    }
    companyMotto(){
    return `I am ${this.name} and this company is the best`
    }
    joiningYear(){
        return 2022-this.givenExperience;
    }

    static add(a,b){
        return a+b;
    }
}

//Inheritance. Class Programmer tryna take the properties of Employee without having to repeatedly
//type the same for programmer.
class Programmer extends Employee{
  
    constructor(givenName,givenExperience,givenDivision,language,github){
        //Whatever properties present in parent class constructor, use super to use it.
            super(givenName,givenExperience,givenDivision);
            this.language=language;
            this.github=github;

    }
    //this keyword cannot be used in static methods.
     favouriteProgrammingLanguage(){
        if('javascript'==this.language){
            return 'Favourite language is',this.language;
        }
        else{
            return  'Some other language which is not javascript';
        }
    }
    static multiply(a,b){
        return a*b;
    }
}


const emp1 = new Employee("Steve",2,"A");
const programmer = new Programmer()
console.log(emp1);
console.log(emp1.joiningYear());
//Static methods are accessed using class names
console.log(Employee.add(3,5));