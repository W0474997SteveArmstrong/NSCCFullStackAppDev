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

//Inheritance. Class Programmer tryna take the 
class Programmer extends Employee{
  
}


const emp1 = new Employee("Steve",2,"A");
console.log(emp1);
console.log(emp1.joiningYear());
//Static methods are accessed using class names
console.log(Employee.add(3,5));