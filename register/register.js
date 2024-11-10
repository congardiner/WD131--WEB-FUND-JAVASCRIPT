// I think that we are going to need an ES Modules page that handles how to format these pages.
// need to add an event listener to the button
// const variable created for handling the button press

//DOMContentLoaded ensures that the function(s) are loaded into the browser to ensure that testing is possible.
// document.addEventListener("DOMContentLoaded", function() {
//     const buttonPress = document.getElementById('addParticipantButton');
//     let participantCount = 1;

//     addParticipantsButton.addEventListener('click', function() {
//         participantCount++;
//         // makes it so that the count automatically upon click will add another object for the personObject,
//         // or in this case each participant


//         // option for cloning each section so that when there is a new participant, this becomes expanded in its usage.
//         const participantSection = document.querySelector('.participant1');
        
//     }
// });


// // I know that it wants me to add the ID, functions, or event handling directly into the html to get it to work with the modules.
// // 

// function HelloWorld() {
//     alert("Hello, World!")
// }

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





document.addEventListener("DOMContentLoaded", function() {
    const addParticipantButton = document.getElementById('addParticipantButton');
    const form = document.querySelector('form');
    const summary = document.createElement('div');
    summary.id = 'summary';
    summary.classList.add('hide');
    document.body.appendChild(summary);
    let participantCount = 1;




    // function participantTemplate(count) {
    //     return `
    //         <section class="participant${count}">
    //             <p>Participant ${count}</p>
    //             <div class="item">
    //                 <label for="fname${count}">First Name<span>*</span></label>
    //                 <input id="fname${count}" type="text" name="fname${count}" value="" required="">
    //             </div>
    //             <div class="item activities">
    //                 <label for="activity${count}">Activity #<span>*</span></label>
    //                 <input id="activity${count}" type="text" name="activity${count}">
    //             </div>
    //             <div class="item">
    //                 <label for="fee${count}">Fee ($)<span>*</span></label>
    //                 <input id="fee${count}" type="number" name="fee${count}">
    //             </div>
    //             <div class="item">
    //                 <label for="date${count}">Desired Date <span>*</span></label>
    //                 <input id="date${count}" type="date" name="date${count}">
    //             </div>
    //             <div class="item">
    //                 <label for="grade${count}">Grade</label>
    //                 <select id="grade${count}" name="grade${count}">
    //                     <option selected="" value="" disabled=""></option>
    //                     <option value="1">1st</option>
    //                     <option value="2">2nd</option>
    //                     <option value="3">3rd</option>
    //                     <option value="4">4th</option>
    //                 </select>
    //             </div>
    //         </section>
    //     `;
    // }

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        const total = feeElements.reduce((sum, input) => sum + (parseFloat(input.value) || 0), 0);
        return total;
    }

    function successTemplate(info) {
        return `
            <p>Thank you ${info.adultName} for registering. You have registered ${info.participantCount} participants and owe $${info.totalFees} in Fees.</p>
            <p>Have a nice day!</p>
        `;
    }

    addParticipantButton.addEventListener('click', function() {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addParticipantButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from reloading the page

        // as suggested from within class and from the code bank itself

        // Calculate the total fees
        //
        const total = totalFees();

        // Get the adult name from the form
        // finds fname1
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