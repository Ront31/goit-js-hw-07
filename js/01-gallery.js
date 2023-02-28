import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divGalleryEl = document.querySelector(".gallery");
const galleryMurkup = createGallery(galleryItems);
divGalleryEl.insertAdjacentHTML("beforeend", galleryMurkup);

divGalleryEl.addEventListener("click", onGalleryImgClick);

function createGallery(arg) {
  return arg
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="Image description"
            />
          </a>
        </div>
        `;
    })
    .join("");
}

function onGalleryImgClick(e) {
  e.preventDefault();
  console.log(e.target.getAttribute("data-source"));
}
