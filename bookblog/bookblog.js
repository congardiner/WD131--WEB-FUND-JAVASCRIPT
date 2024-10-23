// Add functionality for filtering and sorting books
document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('input[type="checkbox"]');
    
    filters.forEach(filter => {
        filter.addEventListener('change', function() {
            // Get all selected filters
            const selectedFilters = {
                age: [...document.querySelectorAll('input[name="age"]:checked')].map(el => el.value),
                genre: [...document.querySelectorAll('input[name="genre"]:checked')].map(el => el.value),
                rating: [...document.querySelectorAll('input[name="rating"]:checked')].map(el => el.value)
            };
            
            // You would implement filtering logic here
            console.log('Selected filters:', selectedFilters);
        });
    });

    // Example of how to add more books dynamically
    const addBook = (date, age, genre, rating, title, description, imageUrl) => {
        const template = `
            <div class="book-entry">
                <div class="book-metadata">
                    <div class="book-date">${date}</div>
                    <div class="book-age">${age}</div>
                    <div class="book-genre">${genre}</div>
                    <div class="book-rating">${'★'.repeat(rating)}</div>
                </div>
                <div class="book-content">
                    <h2><a href="#" class="book-title">${title}</a></h2>
                    <img src="${imageUrl}" alt="${title} book cover" class="book-image">
                    <p class="book-description">${description} <a href="#">Read More...</a></p>
                </div>
            </div>
        `;
        document.querySelector('.main-content').insertAdjacentHTML('beforeend', template);
    };
});


// This is the javascript that was provided in the course instructions for how to add content and refresh it as such within the bookblog.
// edit note: still need to changelog my functions and other assets that I am bridging into the mainblog.


// edit note: I added a function that literally scrolls back to the top of the webpage, super nifty!
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