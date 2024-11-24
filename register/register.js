// I think that we are going to need an ES Modules page that handles how to format these pages.
// need to add an event listener to the button
// const variable created for handling the button press



// // I know that it wants me to add the ID, functions, or event handling directly into the html to get it to work with the modules.
// // 


// This is a reminder of how I would implement a button.

// let and const are all variable types in modern javascript
// if else for the list of possible options?
// otherwise it sounds like I will assign i++ to an eventHandler variable to create new users for the form each time it is populated/clicked?
// within html it would be <button onclick="HelloWorld">Click Me</button>
// eventHandling is what makes our webpages super interactive.



// what is the difference between querySelectorAll and getElementByID
// can pull the class, the id, or the first element from input using querySelector

// import statements.
// fleshing directly from my Templates.js file feed, using our ES Modules diagramming methods learned within class.

import { participantTemplate, successTemplate } from './Templates.js';

document.addEventListener("DOMContentLoaded", function() {
    const addParticipantButton = document.getElementById('addParticipantButton');
    const form = document.querySelector('form');
    const summary = document.getElementById('summary');
    summary.classList.add('hide');
    let participantCount = 1;

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        const total = feeElements.reduce((sum, input) => sum + (parseFloat(input.value) || 0), 0);
        return total;
    }

    addParticipantButton.addEventListener('click', function() {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addParticipantButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from reloading the page

        // Calculate the total fees
        const total = totalFees();

        // Get the adult name from the form
        const adultName = form.querySelector('input[name="fname1"]').value;

        // Hide the form and show the summary element
        form.classList.add('hide');
        summary.classList.remove('hide');
        summary.innerHTML = successTemplate({
            adultName: adultName,
            participantCount: participantCount,
            totalFees: total
        });
    });
});






    