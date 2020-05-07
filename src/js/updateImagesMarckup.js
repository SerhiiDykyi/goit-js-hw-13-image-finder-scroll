import refs from './refs';
import imageShowTPL from '../templates/image_show.hbs';

function updateImageMarkup(nameCountry) {
  const markup = imageShowTPL(nameCountry);
  refs.imageContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateImageMarkup;
