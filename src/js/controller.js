'use strict'
import * as model from './model.js'
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js'
import searchView from './views/searchView.js'
import resultView from './views/resultView.js';

if (module.hot) {
  module.hot.accept();
}
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
const controlSearchResults = async function () {
  try {
    resultView.renderSpinner();
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;
    // 2) Load search results
    await model.loadSearchResults(query);
    // 3) Render results
    resultView.render(model.state.search.results);
  }
  catch (err) {
    alert(err);
  }
}
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}
init();
