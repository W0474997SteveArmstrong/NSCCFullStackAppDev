document.querySelector('button').addEventListener('click',addCustomer);


function addCustomer(event){

    //stops the default action
    event.preventDefault();
    const fd = new FormData(document.querySelector('form'));
    // alert(fd.get('FirstName'));
    fetch('https://localhost:9999/customers',{method:'POST',body:fd});
    //grab the info from the form
    //post the info to our server


}

//fetch practice

//fetch("/something",{})
//fetch("/something",{method:"POST",body:fd})