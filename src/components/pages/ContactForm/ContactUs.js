import React from 'react';
import '../../../App.css';
import './style.css';

export default function ContactUs() {
    return <h1 className='contact-us'>CONTACT US</h1>;
  }

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const success = document.querySelector("#success");
    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const messageError = document.querySelector("#messageError");

    function validateForm() {
        clearMessages();
        let errorFlag = false;

        if (nameInput.value.length < 1) {
            nameError.innerText = "Name cannot be blank";
            nameInput.classList.add("error-border");
            errorFlag = true;
        }

        if (!emailIsValid(email.value)) {
            emailError.innerText = "Invalid email address";
            email.classList.add("error-border");
            errorFlag = true;
        }

        if (message.value.length < 1) {
            messageError.innerText = "Please enter a message";
            message.classList.add("error-border");
            errorFlag = true;
        }

        if (!errorFlag) {
            success.innerText = "Success!";
        }
    }

    function clearMessages() {
        nameError.innerText = "";
        emailError.innerText = "";
        messageError.innerText = "";
        success.innerText = "";
        nameInput.classList.remove("error-border");
        email.classList.remove("error-border");
        message.classList.remove("error-border");
    }

    function emailIsValid(email) {
        let pattern = /\S+@\S+\.\S+/;
        return pattern.test(email);
    }

    const contactForm = document.querySelector("#contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            validateForm();
        });
    }
});

