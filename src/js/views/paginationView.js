import icons from 'url:../../img/icons.svg';
import fracty from 'fracty';
import View from './view.js';
class PaginationView extends View {
    _parentEl = document.querySelector('.pagination');
    addHandlerClick(handler) {
        this._parentEl.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkUp() {
        const len = this._data.results.length;
        const numPages = Math.ceil(len / this._data.resultsPerPage);
        const curPage = this._data.page;
        // Page1, and there are other pages
        if (curPage === 1 && numPages > 1) {
            return ` <button data-goto = "${curPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`
        }
        // Page1, and there are no other pages
        if (curPage === 1) {
            return '';
        }
        // Last page
        if (curPage === numPages) {
            return `<button data-goto = "${curPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
            </button>`;
        }
        // Other page
        return `<button data-goto = "${curPage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
    </button>
    <button data-goto = "${curPage + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>`
    }
}
export default new PaginationView();