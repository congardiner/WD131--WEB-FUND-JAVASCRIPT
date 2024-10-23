// javascript arrays practice
// this is built w using maps instead of just an array.

// example 1
const steps = ["one", "two", "three"];
const listTemplate(step) {
  return `<li>${step}</li>`;
}

const stepsHtml = // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join()// set the innerHTML


// Example 2

// creates an array that is stored for the variables that will be needed within the array, updates, queries and pushes it as it needs.
const grades = ["A", "B", "C", "D", "F"]
function gradePoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 5;
    }
    else if (grade === "B") {
        points = 4;
    }

    else if (grade === "C") {
        points = 3;
    }

    else if (grade === "D") {
        points = 2;
    }
    return points;
}
// this creates a map of the index.
const gpaPoints = grades.map(gradePoints);

const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});




const words = ["watermelon", "peach", "apple", "tomato"];
const shortWords = words.filter(function(word) {
    return word.length < 5;
});

// the bracketing and closing of these is super weird as it discloses the options for creating arrays.

// this is another way to declare a filter operator on the function that we created for the array in extracting the data.
// is this how I would create a dropdown of a filter list.
const shortWords1 = words.filter((word) => word.length < 6)

const myArray = [12, 32, 66, 22]
const luckyNumber = 32;

let luckyIndex = myArray.indexOf(luckyNumber);
// this is how to return an item from the array once it has been found.



// as I was learning about different array methods that can be used, specifically in form allocation, this came up.

<script>
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting until validation

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Array of validation checks (each check returns true if valid, false if not)
    const checks = [
      name.trim() !== "", // Name should not be empty
      email.includes("@"), // Email should contain '@'
      password.length >= 8 // Password should be at least 8 characters long
    ];

    // Use the "every" array method to check if all conditions are true
    if (checks.every(Boolean)) {
      alert("Form submitted successfully!");
    } else {
      alert("Please correct the errors in the form.");
    }
  });
</script>











