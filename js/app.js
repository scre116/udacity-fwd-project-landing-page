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
 */

// navigable sections
const sections = document.querySelectorAll('[data-nav]');

/**
 * Main Functions
 */

// build the nav
function buildMenu() {
    const documentFragment = document.createDocumentFragment();
    for (const section of sections) {
        const menuItem = document.createElement('li');
        menuItem.textContent = section.dataset.nav;
        menuItem.classList.add('menu__link');
        menuItem.dataset.targetSectionId = section.id

        documentFragment.appendChild(menuItem);
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

        // no section is (sufficiently) visible. Return the first section, if it is even partially visible
        const firstSection = sections.item(0);
        if (firstSection && sectionIsVisible(firstSection)) {
            return firstSection;
        }

        return null;
    }

    const activeSection = getFirstVisibleSection();

    for (const section of sections) {
        if (section === activeSection) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    }

    // activate the menu item for the active section
    const menuItems = document.querySelectorAll('.menu__link');
    for (const menuItem of menuItems) {
        if (menuItem.dataset.targetSectionId === activeSection?.id) {
            menuItem.classList.add('active');
        } else {
            menuItem.classList.remove('active');
        }
    }
}

// scroll to section if a menu item is clicked
function scrollToSection(event) {
    event.preventDefault();
    const menuItem = event.target;
    if (menuItem.dataset.targetSectionId) {
        const section = document.getElementById(menuItem.dataset.targetSectionId);
        section.scrollIntoView({behavior: 'smooth'});
    }
}

/**
 * Events
 */

// Build menu 
document.addEventListener('DOMContentLoaded', buildMenu);

// Set sections as active
document.addEventListener('scroll', activateViewedSection);
document.addEventListener('resize', activateViewedSection);
document.addEventListener('DOMContentLoaded', activateViewedSection);


// Scroll to section on link click
const menu = document.getElementById('navbar__list');
menu.addEventListener('click', scrollToSection)


