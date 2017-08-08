function convertFromJson (recipes) {
  return recipes.json();
}

function displayRecipes (recipes) {
  console.log(recipes);
  let container = document.querySelector(".container");
  let recipeDisplay = '';
  // iterate through array of recipes
  for (let i = 0; i < recipes.results.length; i++) {
  // define variables
    let recipe = recipes.results[i];
    let recipeCode = `
    <div>
      <a href="${recipe.href}">
        <figure>
        <img class="thumbnail" src="${recipe.thumbnail}">
        <figcaption>${recipe.title}</figcaption>
        </figure>
      </a>
    </div>
    `;
    recipeDisplay += recipeCode;
  }
  container.innerHTML += recipeDisplay;
}

fetch ("http://recipepuppyproxy.herokuapp.com/api/?i=squash")
  .then(convertFromJson)
  .then(displayRecipes);
