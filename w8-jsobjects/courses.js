// Examples of objects that I've made for courses on this school schedule.

const objCourse = {
    code: "CSE131",
    name: "Javascript",


sections: [
    {
    sectionNum: 1,
    roomNum: "STC 200",
    enrolled: 30,
    days: "T",
    instructor: "Bro Willden",
    },

    {
    sectionNum: 2,
    roomNum: "STC 302",
    enrolled: 12,
    days: "M",
    instructor: "Pokemon Trainer",
    },

    {
    sectionNum: 3,
    roomNum: 100,
    enrolled: 72,
    days: "T",
    instructor: "Mr Beast"
    }

   ],

   enrollStudent: function (sectionNum) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }
  },

  dropStudent: function (sectionNum) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled--;
      renderSections(this.sections);
    }
  },


};

// need to add the course sections obj section along with the display method for it as well.


function setNameAndCourse(course) {

    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");

    courseName.textContent = course.name;
    coursecode.textContent = course.code;

}

// tr is for table row
function sectionSet(section) {
    return <tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
    </tr>

}

function renderSections(sections) {
    const html = sections.map(sectionSet);
    document.querySelector("#sections").innerHTML;
    // returns text content of the element for sections.
    // what does textContent mean and how does it work?
}
// need to declare the display methods at the end with the object within.

// what do td and tr mean in javascript? //

// declare what functions are going to be called and displayed

document.querySelector("#enrollStudent").addEventListener("Click", function() {
    const sectionNum = document.querySelector("#sectionNumber").value;
    objCourse.dropStudent(sectionNum);
});

sectionSet(objCourse);
// displays the sectionSet
renderSections(objCourse.sections);
// displays the objCourse of sections 

// this.section 
// how does this work?
// this is a 'pointer'