import React from 'react';
// import '../../App.css';
import './style.css';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

export default function ContactUs() {
  return <h1 className='contact-us'>CONTACT US</h1>;
}
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelector(".error");

// Validate data
function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = ("Invalid email address");
        email.classList.add("error-border");
        errorFlag = true;
    }
    if(message.value.length < 1){ // why is there an error here, changed from comma -> period
        errorNodes[2].innerText = ("Please enter a message");
        message.classList.add("error-border");
        errorFlag = true;
    }

    if (!errorFlag){
        success.innerText = "Success!"; 
    }
}

//Clear error/ success messages
function clearMessages(){
    for(let i = 0; i < errorNodes.length, i++;) {
        errorNodes[i].innerText = "";
    }
    success.innertext="";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}