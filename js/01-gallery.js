import { galleryItems } from "./gallery-items.js";
// Change code below this line

////-------------- версія 1 -----start------//
const containerOfImages = document.querySelector(".gallery");
const createGalleryOfImages = (images) => {
  return images.map((image) => {
    const divEl = document.createElement("div");
    divEl.classList.add("gallery__item");

    const linkEl = document.createElement("a");
    linkEl.classList.add("gallery__link");
    linkEl.href = `${image.original}`;

    const imageEl = document.createElement("img");
    imageEl.classList.add("gallery__image");
    imageEl.src = `${image.preview}`;
    imageEl.setAttribute("data-source", `${image.original}`);
    imageEl.alt = `${image.description}`;

    linkEl.appendChild(imageEl);
    divEl.appendChild(linkEl);

    return divEl;
  });
};

const gridOfImages = createGalleryOfImages(galleryItems);
containerOfImages.append(...gridOfImages);

////-----------------версія 1 ---end---//

////--------- версія 2 ----- start----//

// const containerOfImages = document.querySelector(".gallery");

// function createGalleryOfImages(images) {
//   return images.map((image) => {
//     return `
//     <div class="gallery__item">
//     <a class="gallery__link" href="${image.original}">
//     <img
//     class="gallery__image"
//     src="${image.preview}"
//     data-source="${image.original}"
//     alt="${image.description}"
//     />
//     </a>
//     </div>
//     `;
//   }).join('');
// };

// const galleryMarkup = createGalleryOfImages(galleryItems);

// containerOfImages.insertAdjacentHTML("beforeend", galleryMarkup);
////--------- версія 2 ----- end----//

containerOfImages.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();

  const eventTarget = event.target;
  if (event.target.nodeName !== "IMG") {
    return;
  }

  openModal(eventTarget);
}

function openModal(event) {
  const instance = basicLightbox.create(`
    <img src="${event.dataset.source}" width="800" height="600">
`);

  instance.show();

  document.body.addEventListener("keydown", (event) => {
    if (event.key === "Escape") instance.close();
  });
}

console.log(galleryItems);