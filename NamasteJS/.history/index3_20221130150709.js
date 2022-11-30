//Better and fewer lines of code

const radius=[1,2,3,4,5];

const area = function(radius){
    return Math.PI*radius*radius;
}

radius.map(area);