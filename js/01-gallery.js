import { galleryItems } from './gallery-items.js';
const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
          </a>
        </div>
      `;
    })
    .join('');
}

function onGalleryContainerClick(event) {
  event.preventDefault();
  const isGalleryImageEl = event.target.classList.contains('gallery__image');
  if (!isGalleryImageEl) {
    return;
  }

  const sourceUrl = event.target.dataset.source;
  const description = event.target.alt;

  const instance = basicLightbox.create(`
    <div class="modal">
      <img class="modal__image" src="${sourceUrl}" alt="${description}" />
    </div>
  `);

  instance.show();

  document.addEventListener('keydown', onModalCloseKeyDown);

  function onModalCloseKeyDown(event) {
    if (event.code === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', onModalCloseKeyDown);
    }
  }
}






// const galleryContainer = document.querySelector('.gallery');
// const card = (galleryItemCreate(galleryItems));
// console.log(card);

// galleryContainer.insertAdjacentHTML("beforeend", card);
// console.log(galleryContainer);

// galleryContainer.addEventListener('click', onGalleryContainerClick);

// function galleryItemCreate (galleryItems) {
//  return galleryItems.map(({preview, original, description}) => {
//  return `<div class="gallery__item">
//              <a class="gallery__link" href="${original}">
//              <img
//                     class="gallery__image"
//                     src="${preview}"
//                     data-source="${original}"
//                     alt="${description}"
//                 />
//                 </a>
//                 </div>`})
//     .join('');
    
// }

// function onGalleryContainerClick(e) {
//     e.preventDefault();
    
//     if (e.target.nodeName !== "IMG") {
//         return;
//     }

//     const bigImageUrl = e.target.dataset.source;
//     console.log(bigImageUrl);
//     const instance = basicLightbox.create(`
// 		<img width="1400" height="900" src="${bigImageUrl}">
// 	`);
//     instance.show();

//     window.addEventListener('keydown', (e) => {
//         if (e.code === "Escape") {
//             instance.close();
//         }
//     })
// }