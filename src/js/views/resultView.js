import View from './view.js';
import icons from 'url:../../img/icons.svg';
class ResultView extends View {
  _errorMessage = 'No recipes found for your query! Please try again!';
  _message = '';
  _parentEl = document.querySelector('.results');
  _generateMarkUp() {
    return this._data.map(el => this._generateMarkUpPreview(el)).join('')
  }
  _generateMarkUpPreview(result) {
    return `<li class="preview">
      <a class="preview__link" href="#${result.id}">
        <figure class="preview__fig">
          <img src="${result.image}" alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${result.title}</h4>
          <p class="preview__publisher">${result.publisher}</p>
        </div>
      </a>
    </li>`
  }
}
export default new ResultView();