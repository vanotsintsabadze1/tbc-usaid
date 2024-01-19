import { courseList } from "../data/courses.js";

const courseWrapper = document.querySelector(".courses_wrapper");

courseList.forEach((c) => {
  const courseDiv = document.createElement("div"); // მასივის ყველა ობიექტისთვის იქმნება ახალი ელემენტი.
  courseDiv.classList.add("course"); // შექმნილ ელემენტს ენიჭება კლასი.

  /* 
    შექმნილი ელემენტის innerHTML ხდება შექმნილი შაბლონი, სადაც
    კონკრეტული ობიექტის property არის მინიჭებული.

  */

  courseDiv.innerHTML = `
    <div class="course_image_wrapper">
      <img src="${c.imageSrc}" class="course_image"/>
    </div>
    <div class="course_information">
      <p class="course_card_text">${c.name}<br /> რეგისტრაცია ${c.state}</p>
      <div class="course_details_container">
        <img class="arrow_icon" src="/assets/images/icons/arrow.svg"/>
        <a class="course_details_link">კურსის დეტალები</a>  
      </div>
    </div>`;

  // მთავარ ელემენტს, რომელიც ყველაფერს ერთად მოიცავს ემატება ეს შექმნილი კურსის ელემენტები.
  courseWrapper.appendChild(courseDiv);
});
