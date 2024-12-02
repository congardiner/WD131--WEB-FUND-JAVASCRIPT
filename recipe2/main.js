import recipes from './recipe.mjs';

document.addEventListener("DOMContentLoaded", function () {
  const recipesContainer = document.querySelector('.recipes-container');
  const searchButton = document.querySelector('.search-button');
  const searchInput = document.querySelector('.search-input');

  // Generate a random number >= 0 and < num
  const random = (num) => Math.floor(Math.random() * num);

  // Get a random entry from a list
  const getRandomListEntry = (list) => list[random(list.length)];

  // Generate HTML for tags
  const tagsTemplate = (tags) => tags.map(tag => `<li>${tag}</li>`).join('');

  // Generate HTML for rating stars
  const ratingTemplate = (rating) => {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 0; i < 5; i++) {
      html += `<span aria-hidden="true" class="${i < rating ? 'icon-star' : 'icon-star-empty'}">${i < rating ? '⭐' : '☆'}</span>`;
    }
    html += `</span>`;
    return html;
  };

  // Generate the full recipe HTML
  const recipeTemplate = (recipe) => `
    <figure class="recipe-card">
      <img class="recipe-image" src="${recipe.image}" alt="Image of ${recipe.name}" />
      <figcaption class="recipe-content">
        <ul class="recipe__tags">${tagsTemplate(recipe.tags)}</ul>
        <h2 class="recipe-title">${recipe.name}</h2>
        <p class="recipe__ratings">${ratingTemplate(recipe.rating)}</p>
        <p class="recipe-description">${recipe.description}</p>
      </figcaption>
    </figure>`;

  // Render recipes in the container
  const renderRecipes = (recipeList) => {
    recipesContainer.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
  };

  // Initialize the page with a random recipe
  const init = () => {
    const randomRecipe = getRandomListEntry(recipes);
    renderRecipes([randomRecipe]);
  };

  // Filter recipes based on a search query
  const filterRecipes = (query) => recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.description.toLowerCase().includes(query) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
  ).sort((a, b) => a.name.localeCompare(b.name));

  // Handle search functionality
  const searchHandler = (event) => {
    event.preventDefault();
    const query = searchInput.value.toLowerCase().trim();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
  };

  // Attach event listeners
  searchButton.addEventListener('click', searchHandler);

  // Initialize the page
  init();
});

