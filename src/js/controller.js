const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
const showRecipe = async function () {
  try {
    const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604691c37cdc054bd0d4');
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    }
    console.log(recipe);
  }
  catch (err) {
    alert(err);
  }
}
showRecipe();

