'use strict'
import * as model from './model.js'
import 'core-js/stable';
import { MODAL_CLOSE_SEC } from './config.js';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js'
import searchView from './views/searchView.js'
import resultView from './views/resultView.js';
import bookmarksView from './views/bookmarkView.js'
import paginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';

// if (module.hot) {
//   module.hot.accept();
// }
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    // 0) Update results view to mark selected search result
    resultView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);
    // 1) Loading recipe
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
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;
    resultView.renderSpinner();
    // 2) Load search results
    await model.loadSearchResults(query);
    // 3) Render results
    resultView.render(model.getSearchResultsPage());
    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  }
  catch (err) {
    resultView.renderError();
  }
}
const controlPagination = function (goToPage) {
  // 1) Render new results
  resultView.render(model.getSearchResultsPage(goToPage));
  // 2) Render new pagination buttons
  paginationView.render(model.state.search);
}

const controlServings = function (newServings) {
  // Update the recipe servings in state
  model.updateServings(newServings);
  // Update the recipe view, only update the text and attributes in DOM rather than the whole page
  recipeView.update(model.state.recipe);
}

const controlToggleBookmark = function () {
  // 1) Toggle bookmark
  if (!model.state.recipe.bookmarked) model.addBookMark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  // 2) Update recipe view
  recipeView.update(model.state.recipe);
  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
}
const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
}
const controlAddRecipe = async function (newRecipe) {
  try {
    // show loading spinner
    addRecipeView.renderSpinner();
    // upload new recipe data
    await model.uploadRecipe(newRecipe);
    // render recipe and bookmark
    recipeView.render(model.state.recipe);
    bookmarksView.render(model.state.bookmarks);
    // success message
    addRecipeView.renderMessage();
    // close form window
    setTimeout(() => {
      addRecipeView.toggleWindowAndOverlay();
    }, MODAL_CLOSE_SEC * 1000)
    // change ID in url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
  }
  catch (err) {
    addRecipeView.renderError(err.message);
  }

}
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlToggleBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
}
init();
console.log('Welcome to my site!');
