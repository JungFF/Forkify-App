'use strict'
import * as model from './model.js'
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js'


const controlRecipes = async function () {
  try {
    // 1) Loading recipe
    const id = window.location.hash.slice(1);
    if (!id) return;
    console.log(id);
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  }
  catch (err) {
    recipeView.renderError();
  }
}
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
}
init();