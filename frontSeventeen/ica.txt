//1. Favorite animal
class FavoriteAnimal 
{
    constructor(_name,_acitivity,_location)
    {
        this.name=_name;
        this.activity=_acitivity;
        this.location=_location;
    }

    hewouldSay()
    {
        console.log("I need to sleep, don't disturb me");
    }
}



const animalInfo = new FavoriteAnimal('Cat','Sleeping','Room');
console.log(animalInfo.activity);           //Sleeping
animalInfo.hewouldSay();                    //"I need to sleep, don't disturb me"

const animalInfoTwo = new FavoriteAnimal('Dog','Running','Park');
console.log(animalInfoTwo.activity);        //Running
console.log(animalInfoTwo.name, 'is', animalInfoTwo.activity);        //Dog is Running



//2. Person
class Person 
{
    constructor(_name,_hobby,_city)
    {
        this.name=_name;
        this.hobby=_hobby;
        this.city=_city;
    }

    whyIlikeher()
    {
        console.log("She is the kindest person I have ever met");
    }
    
}

const personInfo = new Person('Lisa','Driving','Kobe');
console.log(personInfo.name, 'has been living in', personInfo.city);   //Lisa  has been living in Kobe
personInfo.whyIlikeher();               //"She is the kindest person I have ever met"



