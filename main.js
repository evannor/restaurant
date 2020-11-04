// Sticky main-nav as user scrolls
window.onscroll = function() {navbarSticky()};

var navbar = document.getElementById("main-nav");

var sticky = navbar.offsetTop;

function navbarSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}