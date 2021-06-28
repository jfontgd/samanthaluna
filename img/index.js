var nav = document.querySelector(".nav-links");
var burger = document.querySelector(".burger");
var links = nav.querySelectorAll("a");

burger.addEventListener("click", function() {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener("click", function() {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});
