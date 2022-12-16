
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryEl = document.querySelector(".gallery");
const galleryMarkup = makeGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);


function makeGalleryMarkup(galleryItems){
    return galleryItems.map(({ preview, original, description }) =>{
        return`
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
`;
    }).join("");
}
const galleryImg = new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
});