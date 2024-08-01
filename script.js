const bannerShapes = document.querySelector(".banner-shapes");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const shapeWidth = 530; // Width of a single shape
const shapeMargin = 16; // Margin on each side of shapes

let currentIndex = 0;

function updateBanner() {
  bannerShapes.style.transform = `translateX(-${currentIndex * (shapeWidth + 2 * shapeMargin)}px)`;
}

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : bannerShapes.children.length - 1;
  updateBanner();
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex < bannerShapes.children.length - 1) ? currentIndex + 1 : 0;
  updateBanner();
});


// Example function to scroll to top, if necessary
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Example function to toggle help box, if necessary
function toggleHelpBox() {
  var helpBox = document.getElementById("helpBox");
  helpBox.classList.toggle("open");
}

// Hide navbar on scroll down, show on scroll up
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add("hidden");
    if (scrollTop > 0) {
      navbar.classList.add("white-bg");
    }
  } else {
    navbar.classList.remove("hidden");
    if (scrollTop === 0) {
      navbar.classList.remove("white-bg");
    }
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});


const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});
