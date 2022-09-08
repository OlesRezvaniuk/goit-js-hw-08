// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

// Отримуємо доступ батьківського елементу списка
const galeryBox = document.querySelector('.gallery');
// Створюємо список
const listItemsMarkup = createListItemsMarkup(galleryItems);
// Створюємо функцію та перебираємо масив елементів
function createListItemsMarkup(galleryItems) {
  return (
    galleryItems
      //   метод .map() з параметрами, створюємо html контент за допомогою
      //  шаблонних рядків, вказуємо перемінні в src, data - source і alt
      .map(({ preview, original, description }) => {
        return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              onclick="return false"
              />
        </a>
      </div>`;
      })
      // отримуємо новий масив
      // Виконуємо метод join, об'єднуємл едемени масиву
      .join('')
  );
}

galeryBox.insertAdjacentHTML('beforeend', listItemsMarkup);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
