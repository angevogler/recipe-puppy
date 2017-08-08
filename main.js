function convertFromJson (recipes) {
  return recipes.json();
}

function displayRecipes (recipes) {
  console.log(recipes);
  
  // define variables
  let userInput = document.querySelector("#search-term");
  let container = document.querySelector(".container");
  let recipeDisplay = '';

  // iterate through array of recipes
  for (let i = 0; i < recipes.results.length; i++) {

  // define variable to hold indexes
    let recipe = recipes.results[i];

  // search bar
    // need to look through every single recipes.results[i].ingredients created
    // if (recipe.ingredients === userInput.toUpperCase())
    // return those recipes
    // else
    // return no results found

  // template literal HTML to show search results
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

fetch ("http://recipepuppyproxy.herokuapp.com/api/?i=chocolate")
  .then(convertFromJson)
  .then(displayRecipes);
