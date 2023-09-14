// Add imports above this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
function murkup(gallery) {
  return gallery
    .map((item) => {
      console.log(item);
      return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", murkup(galleryItems));
console.log(murkup(galleryItems));
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});


console.log(galleryItems);
