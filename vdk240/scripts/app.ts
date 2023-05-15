﻿// slider handler




document.addEventListener('DOMContentLoaded', () => {
    const rangeSlider = document.querySelector('#range-slider') as HTMLInputElement;
    const rangeValue = document.querySelector('#range-value') as HTMLElement;

    if (rangeSlider && rangeValue) {

    rangeSlider.addEventListener('input', () => {
        rangeValue.textContent = rangeSlider.value;
    });
    };
});

//document.addEventListener('DOMContentLoaded', () => {
//    const container = document.querySelector('#SpeedControllerPage'); // Replace '.container' with the selector of your parent container element

//    if (container) {
//        container.addEventListener('load', () => {
//            const rangeSlider = document.querySelector('#range-slider') as HTMLInputElement;
//            const rangeValue = document.querySelector('#range-value') as HTMLElement;

//            rangeSlider.addEventListener('input', () => {
//                rangeValue.textContent = rangeSlider.value;
//            });
//        });
//    }
//});



// Function to handle the form submission
function handleFormSubmit(event: Event): void {
    

    // Get form values
    const brokerUrl = (document.getElementById("brokerUrl") as HTMLInputElement).value;
    const clientId = (document.getElementById("clientId") as HTMLInputElement).value;
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    // Perform further actions with the MQTT connection configuration
    // For example, you can establish the MQTT connection using a client library
    console.log(brokerUrl, clientId, username, password);
    // Clear form inputs
    //(document.getElementById("mqttForm") as HTMLFormElement).reset();
    event.preventDefault();
}

// Attach the form submission event listener
const form = document.getElementById("mqttForm");
if (form) {
    form.addEventListener("submit", this.handleFormSubmit);
}



