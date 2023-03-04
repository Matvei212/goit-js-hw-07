import { galleryItems } from './gallery-items.js';

import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');


const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
       </a>`
  )
  .join('');


gallery.insertAdjacentHTML('beforeend', galleryMarkup);


gallery.addEventListener('click', event => {
  event.preventDefault();

  const target = event.target;
  if (target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${target.dataset.source}" alt="${target.alt}" />
  `);

  instance.show();
});


console.log(galleryItems);




