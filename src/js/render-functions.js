// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { getImagesByQuery } from "./pixabay-api";


const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");


const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: 'alt',
  captionDelay: 250,
});



export function createGallery(images) {
   const markup = images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => {
    return `<li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
          <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${likes}</p>
          <p class="info-item"><b>Views</b> ${views}</p>
          <p class="info-item"><b>Comments</b> ${comments}</p>
          <p class="info-item"><b>Downloads</b> ${downloads}</p>
        </div>
      </li>`;
    })
    .join('');
    gallery.innerHTML = markup;
    lightbox.refresh();
}



export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove("is-hidden"); // показываем спиннер
}

export function hideLoader() {
  loader.classList.add("is-hidden"); // скрываем спиннер
}