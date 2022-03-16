import View from './view.js';
import icons from 'url:../../img/icons.svg';
class AddRecipeView extends View {
    _parentEl = document.querySelector('.upload');
    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');
    _message = 'Recipe was successfully uploaded :)'
    constructor() {
        super();
        this._addHandlerShowWindow();
    }
    _addHandlerShowWindow() {
        this._btnOpen.addEventListener('click', this.toggleWindowAndOverlay.bind(this));
        this._btnClose.addEventListener('click', this.toggleWindowAndOverlay.bind(this));
        this._overlay.addEventListener('click', this.toggleWindowAndOverlay.bind(this));
    }
    toggleWindowAndOverlay() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }
    addHandlerUpload(handler) {
        this._parentEl.addEventListener('submit', function (e) {
            e.preventDefault();
            const dataArr = [...new FormData(this)];
            const data = Object.fromEntries(dataArr);
            handler(data);
        })
    }
    _generateMarkUp() {
        // this._data points to bookmarks array
        return this._data.map(el => previewView.render(el, false)).join('')
    }
}
export default new AddRecipeView();