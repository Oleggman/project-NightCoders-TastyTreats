import Pagination from 'tui-pagination';
// const Pagination = require('tui-pagination');
import 'tui-pagination/dist/tui-pagination.css';
import { loadGallery } from '../partials/gallery/all-recipes.js';

function renewPagination() {
  const container = document.getElementById('pagination');
  console.log(container);
  let totalRecipies = sessionStorage.getItem('totalPages') * 9;
  console.log(totalRecipies);
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
  console.log(pagination);
  // pagination.movePageTo(3)
  // pagination.reset();
  // setItemsPerPage(itemCount) //Set count of items per page
  // setTotalItems(itemCount)  //Set total count of items
  pagination.on('beforeMove', event => {
    const currentPage = event.page;
    console.log(currentPage);
    loadGallery(currentPage);
  });
  console.log(pagination.getCurrentPage());

  // function fetchPagRecipes(currentPage = 1, perPage = '9' ) {
  //     const params = new URLSearchParams({
  //         page: currentPage,
  //         limit: perPage,
  //       });
  //     return axios.get(`https://tasty-treats-backend.p.goit.global/api/recipes?${params}`);
  //   }
}
renewPagination();
export { renewPagination };
