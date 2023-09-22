import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { loadGallery } from '../partials/gallery/all-recipes.js';

function renewPagination() {
  const container = document.getElementById('pagination');
  let totalRecipies = sessionStorage.getItem('totalPages') * 9;
  const options = {
    totalItems: totalRecipies,
    itemsPerPage: 9,
    visiblePages: 3,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination(container, options);
  pagination.on('beforeMove', event => {
    const currentPage = event.page;
    loadGallery(currentPage);
  });
}
renewPagination();
export { renewPagination };
