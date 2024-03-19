import { openImage } from "./index";
const cardsContainer = document.querySelector('.elements');

cardsContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('element__button-trash')) {
      const cardToRemove = event.target.closest('.element');
      cardToRemove.remove();
  }
});

export function createCardElement(name, image) {
    const cardTemplate = document.querySelector('#card-template');  
    const cardClone = document.importNode(cardTemplate.content, true);  
    cardClone.querySelector('.element__image').src = image;
    cardClone.querySelector('.element__name').textContent = name;

    cardsContainer.insertBefore(cardClone, cardsContainer.firstElementChild);

    const likeButtons = document.querySelectorAll('.element__button-like');
    const images = document.querySelectorAll('.element__image');

    likeButtons.forEach(function (button) {
      button.addEventListener('click', likeClick);
    });

    images.forEach(image => {
      image.addEventListener('click', () =>
        openImage(image))
    });
}

export function likeClick(event) {
    const likeButton = event.target;
    likeButton.classList.toggle('element__button-like_active');
}
