function getGrades(inputSelector) {
    // get grades from the input box
    const grades = document.querySelector(inputSelector).value;
    // split them into an array (String.split(','))
    const gradesArray = grades.split(",");
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
    console.log(cleanGrades);
    // return grades
    return cleanGrades;
  }

  
  
  function lookupGrade(grade) {
    let points = 0;
  
    if (grade === "A") {
      points = 5;
    } else if (grade === "B") {
      points = 4;
    } else if (grade === "B+") {
      points = 3.5;
    } else if (grade === "C+") {
        points = 3.3;
    } else if (grade === "C") {
      points = 3;
    } else if (grade === "C-") {
        points = 2.5;
    } else if (grade === "D") {
      points = 2;
    } else if (grade === "F") {
        points = 1;
    } else if (grade === "NP") {
        points = 0;
    }
  
    return points;
  }
    // converts the letter grade to it's GPA point value and returns it
  
  function calculateGpa(grades) {

    const gradePoints = grades.map((grade) => lookupGrade(grade));
    
    const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA

    return gpa.toFixed(2)
    // the toFixed returns this to the 2nd decimal place
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector

    const outputElement = document.querySelector(selector)
    outputElement.innerText = gpa;
  }
  
  function clickHandler() {

    const grades = getGrades("#grades");

    const gpa = calculateGpa(grades);

    outputGpa(gpa, "#output");
    // when the button in our html is clicked:
    // get the grades entered into the input
    // calculate the gpa from the grades entered
    // display the gpa
  }


  document.querySelector("#submitButton").addEventListener("click", clickHandler);