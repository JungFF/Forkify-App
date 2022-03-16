import View from './view.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
class BookmarksView extends View {
    _errorMessage = 'No bookmarks yet! Find a nice recipe and bookmark it';
    _message = '';
    _parentEl = document.querySelector('.bookmarks__list');
    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }
    _generateMarkUp() {
        // this._data points to bookmarks array
        return this._data.map(el => previewView.render(el, false)).join('')
    }
}
export default new BookmarksView();