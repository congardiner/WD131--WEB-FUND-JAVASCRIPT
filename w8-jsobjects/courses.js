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


   ],
};

// need to add the course sections obj section along with the display method for it as well.



function setNameAndCourse(course) {

    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");

    courseName.textContent = course.name;
    coursecode.textContent = course.code;

}

// need to declare the display methods at the end with the object within.

// what do td and tr mean in javascript? //

