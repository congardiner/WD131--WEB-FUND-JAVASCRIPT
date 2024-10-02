// javascript for my coolpics landing page practice //

// need to make a hamburger menu that is collapsable and usable within the varying screen restrictions
// for mobile and desktop usage 

const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    
});
