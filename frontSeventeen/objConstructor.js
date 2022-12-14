
function constructCar(_make,_model,_year)
    {
        //Make sure to set "{"" just next to return, not in the next line
        return {
            make:_make,
            model:_model,
            Year:_year,
            soundHorn:function(){
                console.log('Beep!');
            }
        };

    };
    
    const carInfoTwo = constructCar('Fiat','spider',1980);
    console.log(carInfoTwo.make);          //Fiat