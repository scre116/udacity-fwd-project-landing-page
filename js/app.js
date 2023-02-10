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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function loadNavigation() {
    const documentFragment = document.createDocumentFragment();
    const sections = document.querySelectorAll('[data-nav]');

    for (const section of sections) {
        const listItem = document.createElement('li');
        listItem.textContent = section.dataset.nav;
        listItem.classList.add('menu__link');
        listItem.dataset.target = section.id

        documentFragment.appendChild(listItem);
    }

    let navbar = document.getElementById('navbar__list');
    navbar.appendChild(documentFragment);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu 
document.addEventListener('DOMContentLoaded', loadNavigation);

// Scroll to section on link click

// Set sections as active


