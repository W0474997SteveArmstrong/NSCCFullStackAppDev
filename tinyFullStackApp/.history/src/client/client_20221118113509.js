document.querySelector('form').addEventListener('click',addCustomer);


function addCustomer(event){

    event.preventDefault;
    const fd = new FormData(document.querySelector('form'));
    //we wanna send data to the 
    alert(fd.get('FirstName'));

    
    //grab the info from the form

    //post the info to our server


}