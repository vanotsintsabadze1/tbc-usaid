const header = document.querySelector("header");

console.log(header);

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("header_fixed");
  } else {
    header.classList.remove("header_fixed");
  }
});
