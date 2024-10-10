// javascript for my coolpics landing page practice //

// need to make a hamburger menu that is collapsable and usable within the varying screen restrictions
// for mobile and desktop usage 
// const and let
// function
// can make classes and ids within functions 

// Menu functionality
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function toggleMenu() {
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

// Window resize handling
function handleResize() {
    if (window.innerWidth > 700) {
        menu.classList.remove("hide");
        menuButton.style.display = 'none';
    } else {
        menu.classList.add("hide");
        menuButton.style.display = 'block';
    }
}

window.addEventListener("resize", handleResize);
handleResize(); // Call on initial load

// Gallery click functionality
// modal means dialog popup box, which as provided by w3schools, supplements the open window function that was created
// and created class that allows the user to then hide the modal windows as they are created
// using an 'X' in the right hand corner with an event handler.
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.createElement('div');
modal.className = 'modal hide';
document.body.appendChild(modal);

// Viewer template function
function viewerTemplate(imageUrl, altText) {
    return `
        <div class="modal-content">
            <img src="${imageUrl}" alt="${altText}">
            <p>${altText}</p>
            <button class="close-button">&times;</button>
        </div>
    `;
}

// Open Modal, not sure how src and alt work just yet in hiding modal windows. //
function openModal(src, alt) {
    modal.innerHTML = viewerTemplate(src, alt);
    modal.classList.remove('hide');

    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', closeModal);
}

function closeModal() {
    modal.classList.add('hide');
}

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        openModal(img.src, img.alt);
    });
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Ensure modal works correctly on different screen sizes
window.addEventListener('resize', () => {
    if (!modal.classList.contains('hide')) {
        const img = modal.querySelector('img');
        openModal(img.src, img.alt);
    }
});