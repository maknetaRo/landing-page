/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navbar = document.querySelector(".navbar__menu");
const ulList = document.getElementById("navbar__list");
const sections = document.getElementsByTagName("section");
const allSectionsList = Array.from(sections);

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
window.onscroll = function () {
  stickyNavbar();
  setActive();
  // activeLink();
};

const sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
allSectionsList.forEach((item) => {
  let elem = document.createElement("li");
  elem.classList.add("link");
  let aTag = document.createElement("a");
  let url = `#${item.id}`;
  let urlElem = url;
  aTag.href = urlElem;
  aTag.textContent = item.dataset.nav;

  elem.append(aTag);
  ulList.appendChild(elem);
  return ulList;
});
navbar.appendChild(ulList);

// Add class 'active' to section when near top of viewport
let windowHeight = window.innerHeight;

function setActive() {
  for (let i = 0; i < allSectionsList.length; i++) {
    let positionFromTop = allSectionsList[i].getBoundingClientRect().top;
    let positionFromBottom = allSectionsList[i].getBoundingClientRect().bottom;
    allSectionsList[i].className = allSectionsList[i].className.replace(
      "your-active-section",
      "hidden"
    );
    if (positionFromTop - windowHeight <= 0) {
      allSectionsList[i].className = allSectionsList[i].className.replace(
        "hidden",
        "your-active-section"
      );
    } else {
      allSectionsList[i].className = allSectionsList[i].className.replace(
        "your-active-section",
        "hidden"
      );
    }
  }
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

let elements = document.getElementsByClassName("link");
let links = Array.from(elements);

for (let i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    let el = elements[0];
    while (el) {
      if (el.tagName === "LI") {
        el.classList.remove("active-link");
      }
      el = el.nextSibling;
    }
    this.classList.add("active-link");
  };
}
