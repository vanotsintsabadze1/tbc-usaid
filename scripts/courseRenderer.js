import { courseList } from "../data/courses.js";

const courseWrapper = document.querySelector(".courses_wrapper");

/* 

  For each course that is in the courses.js file, we create a new div element and add a class to it.
  Then we add the innerHTML to the div element, which will contain the course image, course name, registration state and course details link.
  Then we append the div element to the courseWrapper element, which is the main element that contains everything.
  The purpose of this is to not fiddle in the HTML file, but to create everything dynamically in the JavaScript file.

*/

courseList.forEach((c) => {
  const courseDiv = document.createElement("div");
  courseDiv.classList.add("course");

  courseDiv.innerHTML = `
    <div class="course_image_wrapper">
      <img src="${c.imageSrc}" class="course_image"/>
    </div>
    <div class="course_information">
      <div class="course_card_text_section">
        <p class="course_card_text course_name">${c.name}</p>
        <p class="registration_state">რეგისტრაცია ${c.state}</p>
      </div>

      <div class="course_details_container">
        <img class="arrow_icon" src="/assets/images/icons/arrow.svg"/>
        <a class="course_details_link">კურსის დეტალები</a>  
      </div>
    </div>`;

  courseWrapper.appendChild(courseDiv);
});
