import recipes from './recipe.mjs';

document.addEventListener("DOMContentLoaded", function() {
  const recipesContainer = document.querySelector('.recipes-container');

  // func I created for expressing an instance of an object, in this case an recipe of recipes (as there are many objs within the mjs array.)
  for (const recipe of recipes) {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');


    const recipeImage = document.createElement('img');
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.name;


    const recipeContent = document.createElement('div');
    recipeContent.classList.add('recipe-content');


    const recipeTag = document.createElement('span');
    recipeTag.classList.add('tag');
    recipeTag.textContent = recipe.tags.join(', ');


    const recipeTitle = document.createElement('h2');
    recipeTitle.textContent = recipe.name;


    const recipeDescription = document.createElement('p');
    recipeDescription.classList.add('recipe-description');
    recipeDescription.textContent = recipe.description;


    // This is a function that I needed assistance creating and used a GPT model to query and troubleshoot with as I haven't ever worked with a function this difficult up to this point.

    const recipeRating = document.createElement('span');
    recipeRating.classList.add('rating');
    recipeRating.setAttribute('role', 'img');
    recipeRating.setAttribute('aria-label', `Rating: ${recipe.rating} out of 5 stars`);
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('span');
      star.setAttribute('aria-hidden', 'true');
      star.classList.add(i < recipe.rating ? 'icon-star' : 'icon-star-empty');
      star.textContent = i < recipe.rating ? '⭐' : '☆';
      recipeRating.appendChild(star);
    }

    recipeContent.appendChild(recipeTag);
    recipeContent.appendChild(recipeTitle);
    recipeContent.appendChild(recipeRating);
    recipeContent.appendChild(recipeDescription);

    recipeCard.appendChild(recipeImage);
    recipeCard.appendChild(recipeContent);

    recipesContainer.appendChild(recipeCard);
    // This append child is not working?
  }
});