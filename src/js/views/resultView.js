import View from './view.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
class ResultView extends View {
  _errorMessage = 'No recipes found for your query! Please try again!';
  _message = '';
  _parentEl = document.querySelector('.results');
  _generateMarkUp() {
    // this._data points to search results array
    return this._data.map(el => previewView.render(el, false)).join('')
  }
}
export default new ResultView();