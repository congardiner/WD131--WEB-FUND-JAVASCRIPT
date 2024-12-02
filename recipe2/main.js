import recipes from './recipe.mjs';

document.addEventListener("DOMContentLoaded", function () {
  const recipesContainer = document.querySelector('.recipes-container');
  const searchButton = document.querySelector('.search-button');
  const searchInput = document.querySelector('.search-input');

  // Creates a random number >= 0 and < num using the attached functions (and methods like floor)
  const random = (num) => Math.floor(Math.random() * num);

  // Edit Note: Makes a random recipe displayed by default when loading the webpage.
  const getRandomListEntry = (list) => list[random(list.length)];

  // Assembles and joins my tags from the query on my recipes pulled from mjs
  const tagsTemplate = (tags) => tags.map(tag => `<li>${tag}</li>`).join('');

  // Created from previous func made to display the ratings.
  const ratingTemplate = (rating) => {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 0; i < 5; i++) {
      html += `<span aria-hidden="true" class="${i < rating ? 'icon-star' : 'icon-star-empty'}">${i < rating ? '⭐' : '☆'}</span>`;
    }
    html += `</span>`;
    return html;
  };

  // Utilizes my recipes-container and generates a scalable recipe card for each recipe when the webpage is loaded.
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

  // Renders recipes in the Recipe Container
  const renderRecipes = (recipeList) => {
    recipesContainer.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
  };

  // From the Site Code, using it as apart of the core components
  const init = () => {
    const randomRecipe = getRandomListEntry(recipes);
    renderRecipes([randomRecipe]);
  };

  // Filters recipes based on a search query (safety quip for this week from the reading!)
  const filterRecipes = (query) => recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.description.toLowerCase().includes(query) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
    (recipe.recipeIngredient && recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query)))
    // Edit Note: This is finally inclusive to all recipes, the way that I had it written beforehand was crappy coding and was too limited for the querying when filtering. 
  ).sort((a, b) => a.name.localeCompare(b.name));

  // This will handle all of my search(es) ensuring that they are case sensitive and match the conditions set within the search bar for all queries.
  const searchHandler = (event) => {
    event.preventDefault();
    const query = searchInput.value.toLowerCase().trim();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
  };

  // Attaches my 'clicks' as an eventListener for the Search Button
  searchButton.addEventListener('click', searchHandler);

  // Pulls init as intended from the course reading that we did in class.
  init();
});
