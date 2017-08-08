//add event listener to search button
let searchBtn = document.querySelector("#search-btn");
let userInput = document.querySelector("#search-bar");
searchBtn.addEventListener("click", function () {
  fetch (`http://recipepuppyproxy.herokuapp.com/api/?i=${userInput.value}`)
    .then(convertFromJson)
    .then(displayRecipes);
});

function convertFromJson (recipes) {
  return recipes.json();
}

function displayRecipes (recipes) {
  console.log(recipes);

  // define variables
  let container = document.querySelector(".container");
  let recipeDisplay = '';

  // iterate through array of recipes
  for (let i = 0; i < recipes.results.length; i++) {

  // define variable to hold indexes
    let recipe = recipes.results[i];

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
  container.innerHTML = recipeDisplay;
}
