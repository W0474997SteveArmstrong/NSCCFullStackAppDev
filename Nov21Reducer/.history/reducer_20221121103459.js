const names = ['Dean','Dean','Lia','Lia','Lia','Soph'];

//goal:{Dean:2,Lia:3,Soph:1};

const startingPt ={};

function reducer(countObjectSoFar,currentElement)
{
    if(countObjectSoFar[currentElement]===undefined){

    }
    else{
        countObjectSoFar[currentElement] = countObjectSoFar[currentElement]+1;
    }

    return (countObjectSoFar);

}

const countObject = names.reduce(reducer,startingPt);
console.log(countObject);