//------------------------------Toggle icon navbar----------------------

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');


};


//------------------------------form validation----------------------


function validateName() {
    let name = document.getElementById("name").value;
    let namereg = /^[a-zA-Z ]+$/
    if(namereg.test(name)) {
        document.getElementById("message1").innerHTML = "Verified";
        document.getElementById("message1").style.color = "green";
        return true;
    }
    else {
        document.getElementById("message1").innerHTML = "Failed";
        document.getElementById("message1").style.color = "red";
        return false;
    } 

}



function validateEmail(){
    let uremail = document.getElementById("email").value;
    let rege = /^([a-zA-Z0-9\.-_]+)@([A-Za-z0-9-_]{2,20})\.([a-z]{2,6})$/;

    if(rege.test(uremail))  
    {
        document.getElementById("message2").innerHTML = "verified";
        document.getElementById("message2").style.color = "green";
        return true;
    }

    else {
        document.getElementById("message2").innerHTML = "Failed";
        document.getElementById("message2").style.color = "red";
        return false;
    }
}

function validateNumber() {
    let mobnumb = document.getElementById("number").value;
    let numbreg = /^[+91][0-9a-z]{12}$/

    if(numbreg.test(mobnumb)) {
        document.getElementById("message3").innerHTML = "Verified";
        document.getElementById("message3").style.color = "green";
        return true;
    }
    else {
        document.getElementById("message3").innerHTML = "Failed";
        document.getElementById("message3").style.color = "red";
        return false;
    } 
}

function validateAll() {
    validateName();
    validateEmail();
    validateNumber();


    if (validateName() && validateEmail() && validateNumber()) {
    return true
    event.preventDefault()
}
 else {
    return false
 }
}
