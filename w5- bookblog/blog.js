// Added in previous line elements for the webpage, ensuring that all parameters were met, along with other elements for my functions
// W3Schools

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



// I added a function that literally scrolls back to the top of the webpage, super nifty!



window.onscroll = function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

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



// this was provided by the assignment directory, not sure if this will be used for these intents or purposes.

const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]