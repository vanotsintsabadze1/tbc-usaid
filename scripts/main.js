import { courseList } from "../data/courses.js";

const coursesWrapper = document.querySelector(".courses_wrapper");
const courses = courseList.map((c) => {
  return `<div class="course">
            <div class="course_image_wrapper">
                <img src="${c.imageSrc}"/>
            </div>
            <div class="course_information">
                <h3>${c.name}</h3
                <p>რეგისტრაცია ${c.state}</p>
            </div>
          </div>`;
});

coursesWrapper.innerHTML = courses.join("");
