function updateCustomerData(){
    //Fetch to our GET

    fetch('http://localhost:9999/customer')
    .then(res=>res.json())
    .then(json=>{
        //do something....
        const customerData = document.querySelector('#customerList');
        customerData.innerText = JSON;

    })

}
updateCustomerData();


//fetch some url...then .then res.json() and do something