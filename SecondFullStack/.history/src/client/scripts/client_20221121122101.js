function updateCustomerData(){
    //Fetch to our GET

    fetch('http://localhost:9999/customer')
    .then(res=>res.json())
    .then(json=>{
        //do something....
        const customerData = document.querySelector('#customerList');
        customerData.innerText = JSON.stringify(json);

        for (const cust of json) {
            customerData.innerHTML += 
            <b>${cust.FirstName}</b> <br>
        }

    })

}
updateCustomerData();

function addNewCustomer(){
    fetch
}
//fetch some url...then .then res.json() and do something