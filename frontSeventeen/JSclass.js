class Car
{
    constructor(_make,_model,_year)
    {
        this.make=_make;
        this.model = _model;
        this.year=_year;

    }

    soundHorn()
    {
        console.log('Beep!');
    }

}

const Ferrari = new Car('Ferrari', 'GT308',1986);
console.log(Ferrari.make);      //Ferrari
Ferrari.soundHorn();            //Beep!




class countries
{
    constructor(_name,_population,_area)
    {
        this.name = _name;
        this.population = _population;
        this.area = _area;
    }

    aboutThiscountry()
    {
        console.log('The name of this country is', countryInfo.name);
    }


}

const countryInfo = new countries('Sweden', 100000000, 'northern Europe');
console.log(countryInfo.name);
countryInfo.aboutThiscountry();