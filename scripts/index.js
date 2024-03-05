import { createCardElement, likeClick } from './card.js';
import { openAddPopup, openPopup, savePopup, closeAllPopups } from './modal.js';

const openPopupButton = document.querySelector("#openPopup"); // кнопка открытия попапа редактирования профиля 

const form = document.querySelector("#inputForm");
const addForm = document.getElementById('addForm');
const likeButtons = document.querySelectorAll('.element__button-like');
const cardsContainer = document.querySelector('.elements');
const popupMaxImage = document.querySelector('.popupMax__image');
const popupMaxTitle = document.querySelector('.popupMax__title');
const images = document.querySelectorAll('.element__image');
const closeMaxButton = document.querySelector('.popupMax__close-button');
const deleteButton = document.querySelectorAll('.element__button-trash');
const elemCard = document.querySelectorAll('.element');

deleteButton.forEach((deleteBtn, index) => {
  deleteBtn.addEventListener('click', function () {
    elemCard[index].remove();
  });
});


const openAddCard = document.querySelector("#openAddPopup"); //  кнопка добавления карточки 

const newName = document.getElementById('cardName');
const newEmail = document.getElementById('cardData');

function checkForm(newName, newEmail) {
  let isValid = true;

  if (newName.value === '') {
    nameError.textContent = 'Пожалуйста, введите название!';
    newName.style.marginBottom = '0px';
    isValid = false;
  }

  if (newEmail.value === '') {
    dataError.textContent = 'Пожалуйста, введите адрес!';
    newEmail.style.marginBottom = '14px';
    isValid = false;
  }
  if (newName.value !== '') {
    nameError.textContent = '';
    newName.style.marginBottom = '22px';
    isValid = false;
  }

  if (newEmail.value !== '') {
    dataError.textContent = '';
    newEmail.style.marginBottom = '28px';
    isValid = false;
  }
  if (newName.value !== '' & newEmail.value !== '') {
    isValid = true;
  }
  return isValid;
}


// Создаем обработчик события submit для формы
addForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const newNameValue = document.getElementById('cardName').value;
  const newEmailValue = document.getElementById('cardData').value;

  if (checkForm(newName, newEmail)) {
    // Создаем новую карточку
    const newCard = createCardElement(newNameValue, newEmailValue);

    // Добавляем новую карточку в начало контейнера
    cardsContainer.insertBefore(newCard, cardsContainer.firstElementChild);


    const trashButton = newCard.querySelector('.element__button-trash');

    // Добавляем обработчик события клика на кнопку удаления
    trashButton.addEventListener('click', function () {
      newCard.remove();
    });
    // Очищаем форму после добавления
    addForm.reset();
    closeAllPopups();
  } else {

  }
});

openPopupButton.addEventListener("click", openPopup); // Прикрепляем обработчик для открытия попапа редактирования профиля
openAddCard.addEventListener("click", openAddPopup); // Прикрепляем обработчик для открытия попапа добавления карточки
form.addEventListener("submit", savePopup); // Прикрепляем обработчик к форме для отправки

export function openImage(image) {
  const imageUrl = image.getAttribute('src');
  const imageTitle = image.parentElement.querySelector('h2').textContent;
  popupMaxImage.setAttribute('src', imageUrl);
  popupMaxTitle.textContent = imageTitle;
  popupMax.classList.remove('popup');
  popupMax.classList.remove('popup_hidden');
  popupMax.classList.add('popupMax');
}

likeButtons.forEach(function (button) {
  button.addEventListener('click', likeClick);
});


images.forEach(image => {
  image.addEventListener('click', () =>
    openImage(image))
});

closeMaxButton.addEventListener('click', closeAllPopups);

