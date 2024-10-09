// javascript for my coolpics landing page practice //

// need to make a hamburger menu that is collapsable and usable within the varying screen restrictions
// for mobile and desktop usage 

const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector(".menu")
    menu.classList.toggle("hide")
}

menuButton.addEventListener("click", toggleMenu);


function handleResize() {
    if (window.innerWidth > 700) {
        menu.classList.remove("hide");
    }

    else {
        menu.classList.add("hide");
    }
}

window.addEventListener("resize", handleResize);

handleResize();
// should add some event listeners that help with click, hover,
// and menu hiding that will help with it.
