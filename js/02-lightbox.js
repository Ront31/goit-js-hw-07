import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divGalleryEl = document.querySelector(".gallery");
const galleryMurkup = createGallery(galleryItems);
divGalleryEl.insertAdjacentHTML("beforeend", galleryMurkup);

// divGalleryEl.addEventListener("click", onGalleryImgClick);

function createGallery(arg) {
  return arg
    .map(({ preview, original, description }) => {
      return `
          <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `;
    })
    .join("");
}

// function onGalleryImgClick(e) {
//   e.preventDefault();
//   const selectedImage = e.target.getAttribute("data-source");

//   const instance = basicLightbox.create(
//     `<img src="${selectedImage}" width="800" height="1600">`
//   );
//   instance.show();
// }

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
