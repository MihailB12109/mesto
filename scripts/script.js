const openPopupButton = document.querySelector("#openPopup"); // кнопка открытия попапа редактирования профиля 
const savePopupButton = document.querySelector("#savePopup");  
const closePopupButton = document.querySelector("#closePopup"); 
const closeAddButton = document.querySelector("#closeAddPopup");
const popupElement = document.getElementById("popup"); // попап редактирования профиля 
const form = document.querySelector("#inputForm"); 
const addForm = document.getElementById('addForm');
const nameInput = document.querySelector("#userName"); 
const jobInput = document.querySelector("#userData"); 
const likeButtons = document.querySelectorAll('.element__button-like');
const trashButtons = document.querySelectorAll('.element__button-trash');

const cardsContainer = document.querySelector('.elements'); 

const images = document.querySelectorAll('.element__image');
const popupMax = document.getElementById('popupMax');
const popupMaxImage = document.querySelector('.popupMax__image');
const closeMaxButton = document.querySelector('.popupMax__close-button');
const popupMaxTitle = document.querySelector('.popupMax__title');






const openAddCard = document.querySelector("#openAddPopup"); //  кнопка добавления карточки 
const addCard = document.getElementById("addPopup"); // попап добавления карточек 

let nameReal = document.querySelector("#realName"); 
let jobReal = document.querySelector("#realData");

const newName = document.getElementById('cardName');
const newEmail = document.getElementById('cardData');

function checkForm(newName,newEmail) { 
  let isValid = true;

  if (newName.value === '') { 
    nameError.textContent = 'Пожалуйста, введите название!'; 
    newName.style.marginBottom = '0px'; 
    isValid = false; 
  } 
   
  if (newEmail.value === '') { 
    dataError.textContent = 'Пожалуйста, введите адрес!'; 
    newEmail.style.marginBottom = '19px'; 
    isValid = false; 
  }
  if (newName.value !== '') { 
    nameError.textContent = ''; 
    newName.style.marginBottom = '22px'; 
    isValid = false; 
  } 
   
  if (newEmail.value !== '') { 
    dataError.textContent = ''; 
    newEmail.style.marginBottom = '34px'; 
    isValid = false; 
  }
   if (newName.value !== '' & newEmail.value !== '' ){
isValid = true;}
  return isValid;
}


// Создаем обработчик события submit для формы
addForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const newNameValue = document.getElementById('cardName').value;
  const newEmailValue = document.getElementById('cardData').value;

  if (checkForm(newName, newEmail)) {
    // Создаем новую карточку
    const newCard = createCardElement(newNameValue, newEmailValue);
  
    // Добавляем новую карточку в начало контейнера
    cardsContainer.insertBefore(newCard, cardsContainer.firstElementChild);
    // Очищаем форму после добавления
    addForm.reset();
    closeAllPopups();
  } else {
   
  }
});


function openAddPopup(evt) {
  addCard.classList.remove('popup');
  addCard.classList.remove('popup_hidden');
  addCard.classList.add('popup_opened');
}

function openPopup(evt) { 
  nameInput.value = nameReal.textContent; 
  jobInput.value = jobReal.textContent; 
  popupElement.classList.remove('popup');
  popupElement.classList.remove('popup_hidden');
  popupElement.classList.add('popup_opened'); 
} 

// Обработчик «отправки» формы, хотя пока  
// она никуда отправляться не будет  
function savePopup(evt) { 
  evt.preventDefault(); 
  // Получаем значение полей jobInput и nameInput из свойства value  
  nameReal.textContent = nameInput.value; 
  jobReal.textContent = jobInput.value; 
  closeAllPopups(); 
} 

function closeAllPopups() { 
  if(popupElement.classList.contains('popup_opened')) { 
      popupElement.classList.add('popup'); 
      popupElement.classList.remove('popup_opened'); 
      setTimeout(() => { 
          popupElement.classList.add('popup_hidden'); 
      }, 300);
  } 
 else if(addCard.classList.contains('popup_opened')) {  
      addCard.classList.remove("popup_opened"); 
      addCard.classList.add('popup'); 
      const addForm = document.getElementById('addForm');
      addForm.reset();
      setTimeout(() => { 
          addCard.classList.add('popup_hidden'); 
      }, 300);  
      if (newName !== '') {
        nameError.textContent = '';
        newName.style.marginBottom = '22px'; 
      }
      if (newEmail !== '') {
        dataError.textContent = '';
        newEmail.style.marginBottom = '34px'; 
      }
  } 
  else if (popupMax.classList.contains('popupMax')) {  
    popupMax.classList.remove('popupMax');
    popupMax.classList.add('popup'); 
    setTimeout(() => { 
      popupMax.classList.add('popup_hidden'); 
  }, 300);  
}
}


openPopupButton.addEventListener("click", openPopup); // Прикрепляем обработчик для открытия попапа редактирования профиля
openAddCard.addEventListener("click", openAddPopup); // Прикрепляем обработчик для открытия попапа добавления карточки
form.addEventListener("submit", savePopup); // Прикрепляем обработчик к форме для отправки

  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      closeAllPopups();
    }
  });
  
document.addEventListener('click', function(event) {  
    if (event.target.classList.contains('popup_opened') ||event.target.classList.contains('popupMax') || event.target.classList.contains('popup__close-icon')) {  
      closeAllPopups();  
    }  
});
 
function createCardElement(name, image) { 
  // Создаем HTML-элемент для карточки 
  const card = document.createElement('div'); 
  card.classList.add('element'); 
 // изображение
  const cardImageElem = document.createElement('img'); 
  cardImageElem.classList.add('element__image'); 
  cardImageElem.src = image; 
  cardImageElem.alt = name; 
  card.appendChild(cardImageElem); 
   // Название
  const cardTitle = document.createElement('h2'); 
  cardTitle.classList.add('element__name'); 
  cardTitle.textContent = name; 
  card.appendChild(cardTitle); 

  // Добавляем кнопку-лайк 
  const likeButton = document.createElement('button'); 
  likeButton.classList.add('element__button-like');
  likeButton.addEventListener('click', likeClick);
  card.appendChild(likeButton); 

  // Добавляем кнопку удаления
  const trashButton = document.createElement('button');
  trashButton.classList.add('element__button-trash');
  card.appendChild(trashButton);

  // Добавляем увеличение картинки для новых карточек
  cardImageElem.addEventListener('click', ()=>
  openImage(cardImageElem));


  return card;
}

likeButtons.forEach(function(button) {
  button.addEventListener('click', likeClick);
});


function likeClick(event) {
  const likeButton = event.target;
  likeButton.classList.toggle('element__button-like_active');
}

images.forEach(image => {
  image.addEventListener('click', ()=>
  openImage(image))
});


function openImage(image ) {
  const imageUrl = image.getAttribute('src');
    const imageTitle = image.parentElement.querySelector('h2').textContent;
    popupMaxImage.setAttribute('src', imageUrl);
    popupMaxTitle.textContent = imageTitle;
    popupMax.classList.remove('popup');
    popupMax.classList.remove('popup_hidden');
    popupMax.classList.add('popupMax');
} 

closeMaxButton.addEventListener('click', closeAllPopups);

