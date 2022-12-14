const Car =
{
    make:'Mazda',
    model:'3',
    Year:2020,
    soundHorn:function(){
        console.log('Beep!');
    },

    makeTurn: function()
    {
        console.log('Turn right!')
    }
};

console.log(Car.make);      //Matda
Car.soundHorn();            //Beep!
Car.makeTurn();             //Turn right!


//What about a poor Ferrari??
const Ferrari =
{
    make:'Ferrari',
    model:'GT308',
    Year:1986,
    soundHorn:function(){
        console.log('Beep! Beep!');
    }

};

Ferrari.soundHorn();        //Beep! Beep!
