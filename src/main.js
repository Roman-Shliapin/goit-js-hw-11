import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';
import axios from 'axios';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector('.form-input');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Oops!',
      message: 'Please enter a search term',
      timeout: 3000,
      position: 'topRight',
    });
    return;
  }
  form.reset();
  showLoader();
  getImagesByQuery(query)
    .then(hits => {
      clearGallery();

      if (hits.length === 0) {
        iziToast.error({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          timeout: 3000,
          position: 'topRight',
        });
        return;
      }
      createGallery(hits);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => hideLoader());
}
