document.querySelector('form').addEventListener('click',addCustomer);


function addCustomer(){

    event.preventDefault
    const fd = new FormData(document.querySelector('form'));
    alert(fd.get('FirstName'));

    
    //grab the info from the form

    //post the info to our server


}