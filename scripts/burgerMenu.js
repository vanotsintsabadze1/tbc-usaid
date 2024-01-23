const wrapperMenu = document.querySelector(".burger_wrapper");
const navigationWrapper = document.querySelector(".navigation_wrapper");
const navLinks = document.querySelectorAll(".nav_link");

wrapperMenu.addEventListener("click", function () {
  wrapperMenu.classList.toggle("open");
  navigationWrapper.classList.toggle("navigation_wrapper_active");

  navLinks.forEach((navLink) => {
    navLink.classList.toggle("nav_link_active");
  });
});
