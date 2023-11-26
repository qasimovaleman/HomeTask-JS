const hamburger = document.querySelector(".lines");
const navLink = document.querySelector(".nav-link");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});
//
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  //console.log(window.scrollY);
  window.scrollY > 0
    ? header.classList.add("header-scroll")
    : header.classList.remove("header-scroll");
});
//let nav = document.querySelector("nav");
// let menuIkon = document.querySelector(".menu");
// menuIkon.addEventListener("click", function () {
//   nav.classList.toggle("show");

//   this.classList.contains("fa-bars")
//     ? (this.classList = "fa-solid fa-xmark")
//     : (this.classList = "fa-solid fa-bars");
// });
window.addEventListener("scroll", function () {
  console.log("window.scrollY");
  header.classList.toggle("header-scroll", window.scrollY > 0);
});
