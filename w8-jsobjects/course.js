const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
            {
            sectionNum: 1,
            roomNum: "STC 200",
            enrolled: 30,
            days: "MW",
            instructor: "Bro Willden",
            },
        
            {
            sectionNum: 2,
            roomNum: "STC 302",
            enrolled: 12,
            days: "MTH",
            instructor: "Pokemon Trainer",
            },
        
            {
            sectionNum: 3,
            roomNum: 100,
            enrolled: 72,
            days: "TTH",
            instructor: "Mr Beast"
            },

            {
            sectionNum: 5,
            roomNum: 712,
            enrolled: 45,
            days: "MTH",
            instructor: "Professor Hagrid"
            },

            {
            sectionNum: 6,
            roomNum: 112,
            enrolled: 12,
            days: "F",
            instructor: "Not Declared"
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
  
  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
  });
  
  setCourseInfo(aCourse);
  renderSections(aCourse.sections);

