import './css/styles.css';
import './css/basic-lightbox.scss';
import './css/loading_anomation.scss';
import refs from './js/refs';
import imageService from './js/apiService';
import updateImageMarkup from './js/updateImagesMarckup';
import showBigImage from './js/showBigImage';
import lasyLoad from './js/lasyLoad';

const apiKey = '16190641-6f6d4120eafc733567c1d4bc7';

var infScroll = new InfiniteScroll('.gallery', {
  path: function () {
    return `https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${imageService.query}&page=${this.pageIndex}&per_page=12&key=${apiKey}`;
  },
  responseType: 'text',
  status: '.page-load-status',
  history: false,
});

infScroll.on('load', function (response) {
  const { hits } = JSON.parse(response);

  updateImageMarkup(hits);
  const images = document.querySelectorAll('.gallery img');
  lasyLoad(images);
});

refs.searchForm.addEventListener('submit', seachImage);
refs.imageContainer.addEventListener('click', showBigImage);

function seachImage(event) {
  event.preventDefault();
  const form = event.currentTarget;
  imageService.query = form.elements.query.value;
  infScroll.loadNextPage();
  form.reset();
  clearImageContainer();
}

function clearImageContainer() {
  refs.imageContainer.innerHTML = '';
}
