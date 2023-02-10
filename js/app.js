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
 */

// navigable sections
const sections = document.querySelectorAll('[data-nav]');

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
    for (const section of sections) {
        const listItem = document.createElement('li');
        listItem.textContent = section.dataset.nav;
        listItem.classList.add('menu__link');
        listItem.dataset.target = section.id

        documentFragment.appendChild(listItem);
    }

    const navbar = document.getElementById('navbar__list');
    navbar.appendChild(documentFragment);
}

// Add class 'active' to section when near top of viewport
function activateViewedSection() {


    function sectionIsVisible(section) {
        const top = section.getBoundingClientRect().top;
        const bottom = section.getBoundingClientRect().bottom;
        return top < window.visualViewport.height && bottom > 0;
    }

    function getFirstVisibleSection() {

        // find the section which is displayed at the relative top of the screen
        for (const section of sections) {
            // this is our relative top of the screen. It is at 25% from the real top.
            const viewPortTop = window.visualViewport.height / 4;
            const top = section.getBoundingClientRect().top;
            const bottom = section.getBoundingClientRect().bottom;

            if (top < viewPortTop && bottom > viewPortTop) {
                return section;
            }
        }

        // no section is (sufficiently) visible. Return the first section, if it is visible at all
        if (sectionIsVisible(sections.item(0))) {
            return sections.item(0);
        }

        return null;
    }

    const firstVisibleSection = getFirstVisibleSection();

    for (const section of sections) {
        if (section === firstVisibleSection) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
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
document.addEventListener('DOMContentLoaded', loadNavigation);

// Set sections as active
document.addEventListener('scroll', activateViewedSection);
document.addEventListener('resize', activateViewedSection);
document.addEventListener('DOMContentLoaded', activateViewedSection);


// Scroll to section on link click



