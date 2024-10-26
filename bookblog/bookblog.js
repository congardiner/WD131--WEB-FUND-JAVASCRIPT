document.addEventListener('DOMContentLoaded', function() {
    const articlesContainer = document.getElementById('articles-container');
    const filters = document.querySelectorAll('input[type="checkbox"]');
    
    // Function to render a single article with your CSS structure
    function createArticleElement(article) {
        const articleElement = document.createElement('article');
        articleElement.classList.add('book-entry');
        
        articleElement.innerHTML = `
            <div class="book-metadata">
                <img src="${article.imgSrc}" alt="${article.imgAlt}" class="book-image">
                <div class="book-date">${article.date}</div>
                <div class="book-age">${article.ages}</div>
                <div class="book-genre">${article.genre}</div>
                <div class="book-rating">${article.stars}</div>
            </div>
            <div class="book-content">
                <a href="#" class="book-title">${article.title}</a>
                <p class="book-description">${article.description}</p>
            </div>
        `;
        
        return articleElement;
    }

    // Function to render all articles
    function renderArticles(articlesToRender = articles) {
        // Clear existing articles
        articlesContainer.innerHTML = '';
        
        // Create content wrapper if it doesn't exist
        let contentWrapper = document.querySelector('.content-wrapper');
        if (!contentWrapper) {
            contentWrapper = document.createElement('div');
            contentWrapper.classList.add('content-wrapper');
            articlesContainer.appendChild(contentWrapper);
        }

        // Create main content container if it doesn't exist
        let mainContent = contentWrapper.querySelector('.main-content');
        if (!mainContent) {
            mainContent = document.createElement('div');
            mainContent.classList.add('main-content');
            contentWrapper.appendChild(mainContent);
        }

        // Clear main content
        mainContent.innerHTML = '';
        
        // Add each article to the container
        articlesToRender.forEach(article => {
            const articleElement = createArticleElement(article);
            mainContent.appendChild(articleElement);
        });
    }

    // Function to filter articles
    function filterArticles() {
        const selectedFilters = {
            age: [...document.querySelectorAll('input[name="age"]:checked')].map(el => el.value),
            genre: [...document.querySelectorAll('input[name="genre"]:checked')].map(el => el.value),
            rating: [...document.querySelectorAll('input[name="rating"]:checked')].map(el => el.value)
        };

        const filteredArticles = articles.filter(article => {
            const ageMatch = selectedFilters.age.length === 0 || selectedFilters.age.some(age => article.ages.includes(age));
            const genreMatch = selectedFilters.genre.length === 0 || selectedFilters.genre.includes(article.genre);
            const ratingMatch = selectedFilters.rating.length === 0 || selectedFilters.rating.includes(article.stars);
            
            return ageMatch && genreMatch && ratingMatch;
        });

        renderArticles(filteredArticles);
    }

    // Add filter event listeners
    filters.forEach(filter => {
        filter.addEventListener('change', filterArticles);
    });

    // Initial render of articles
    renderArticles();
});

    // Add filter event listeners
    filters.forEach(filter => {
        filter.addEventListener('change', filterArticles);
    });


    // this was all provided within class, however, my code restructing for this is not working well?


    const articles = [
        {
            id: 3,
            title: "Septimus Heap Book One: Magyk",
            date: "July 5, 2022",
            description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
            imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
            imgAlt: "Book cover for Septimus Heap 1",
            ages: "10-14",
            genre: "Fantasy",
            stars: "⭐⭐⭐⭐"
        },
        {
            id: 4,
            title: "The Hunger Games",
            date: "July 10, 2022",
            description: "In a dystopian future, Katniss Everdeen volunteers to take her sister's place in the Hunger Games, a televised fight to the death.",
            imgSrc: "https://upload.wikimedia.org/wikipedia/en/3/39/The_Hunger_Games_cover.jpg",
            imgAlt: "Book cover for The Hunger Games",
            ages: "12-18",
            genre: "Science Fiction",
            stars: "⭐⭐⭐⭐⭐"
        },
        {
            id: 2,
            title: "The Way of Kings - The Stormlight Archives #1",
            date: "August 31, 2010",
            description: "Foreword: Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter. It has been centuries since the fall of the ten consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Men trade kingdoms for Shardblades. Wars were fought for them, and won by them.",
            imgSrc: "https://upload.wikimedia.org/wikipedia/en/8/8b/TheWayOfKings.png",
            imgAlt: "Book cover for The Way of Kings",
            ages: "13+",
            genre: "Fantasy",
            stars: "⭐⭐⭐⭐⭐"
        }

    ];



    // Back to top functionality
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



    




// here is an example of this being executed herein for the js assets in being able to modulate updates from a db

