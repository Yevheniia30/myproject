import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const modalTemplate = basicLightbox.create(document.querySelector('#modal'), {
  onShow: modalTemplate => {
    const closeModalRef = modalTemplate
      .element()
      .querySelector('button[data-close]');
    closeModalRef.onclick = modalTemplate.close;
  },
});

const openModalRef = document.querySelector('button[data-open');

openModalRef.addEventListener('click', modalTemplate.show);
