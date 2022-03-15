// import { get } from 'core-js/core/dict';
// import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './helper.js';
export const state = {
    recipe: {}
};
export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}/${id}`);
        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
            image: recipe.image_url
        }
    } catch (err) {
        throw err;
    }
}