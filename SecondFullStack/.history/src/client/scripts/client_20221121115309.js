function updateCustomerData(){
    //Fetch to our GET

    fetch('url')
    const customerData = document.querySelector('#customerList');
    customerData.innerText = "blah";
}
updateCustomerData();


//fetch some url...then .then res.json() and do something