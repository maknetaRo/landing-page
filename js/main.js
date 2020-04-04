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

const navbar = document.querySelector("navbar__menu");
const ulList = document.getElementById("navbar__list");
const allSections = document.getElementsByTagName("section");
const allSectionsList = Array.from(allSections);

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
allSectionsList.forEach((item) => {
  let elem = document.createElement("li");
  let aTag = document.createElement("a");
  let url = `#${item.id}`;

  let urlElem = url;
  aTag.href = urlElem;
  aTag.textContent = item.dataset.nav;

  elem.append(aTag);
  ulList.appendChild(elem);
});

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
window.onscroll = function () {
  stickyNavbar();
};
const sticky = navbar.offSetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Set sections as active
