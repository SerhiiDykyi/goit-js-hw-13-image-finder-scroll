function showBigImage(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const basicLightbox = require('basiclightbox');
  const URL = event.target.dataset.source;
  basicLightbox.create(`<img width="1400" height="900" src="${URL}">`).show();
}

export default showBigImage;
