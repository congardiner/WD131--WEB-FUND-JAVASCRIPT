function greet(name) {
    console.log("Hello, " + name +"!");
}


function add() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("result").textContent
    = result;
}

// here are two basic functions that I made in order to practice how to make functions with javascript. //

// DOM as explained is like the map of the tree, with the other elements being everything that makes up the tree //

// examples of this in action in javascript //

// creates a paragraph element. //
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is the creation of a new paragraph to practice how Javascript truly works.";

// finds the body element
let body = document.body;
// appends my newParagraph to the body
body.appendChild(newParagraph);


//functionality for the button //

function showMessage() {
    let messageElement = document.getElementById("message");
    messageElement.textContent = "You clicked the button!";
}

let myButton = document.getElementById("myButton");
myButton.addEventListener("click", showMessage);

