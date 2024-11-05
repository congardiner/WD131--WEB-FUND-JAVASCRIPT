
// stores all of my objects for course info
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
      {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 26,
        days: "TTh",
        instructor: "Bro T",
      },
      {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 25,
        days: "TTh",
        instructor: "Sis A",
      },
      
      {
        sectionNum: 4,
        roomNum: "BEN 120",
        enrolled: 2,
        days: "T",
        instructor: "Name Pending",
      },

      {
        sectionNum: 7,
        roomNum: "RIG 201",
        enrolled: 18,
        days: "W",
        instructor: "Professor Grundy",
      },

      {
        sectionNum: 8,
        roomNum: "MAN",
        enrolled: 4,
        days: "TTH",
        instructor: "Bro F",
      }

    ],
    init: function() {
      setCourseInfo(this);
      renderSections(this.sections);
    },
    changeEnrollment: function (sectionNum, add = true) {
      // find the right section...Array.findIndex will work here
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0) {
        if (add) {
          this.sections[sectionIndex].enrolled++;
        } else {
          this.sections[sectionIndex].enrolled--;
        }
        renderSections(this.sections);
      }
    },
  };
  
  function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
  }
  
  function renderSections(sections) {
    const html = sections.map(
      (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
  }

export default aCourse;

// this is the best way to declare a default for an export.

// ES modules are a great way to separate dev code from calling functions and the production environment