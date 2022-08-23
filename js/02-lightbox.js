import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerOfImages = document.querySelector(".gallery");

function createGalleryOfImages(images) {
  return images
    .map((image) => {
      return `
    <li class="gallery__item">
<a class="gallery__item" href="${image.original}">
  <img 
  class="gallery__image" 
  src="${image.preview}" 
  alt="${image.description}" />
</a>
    </li>
    `;
    })
    .join("");
}

const galleryMarkup = createGalleryOfImages(galleryItems);
containerOfImages.insertAdjacentHTML("beforeend", galleryMarkup);

console.log(galleryItems);


let lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
  showCounter: false,
});
