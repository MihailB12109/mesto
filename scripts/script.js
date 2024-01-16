const openPopupButton = document.querySelector("#openPopup"); // кнопка открытия попапа редактирования профиля 
const savePopupButton = document.querySelector("#savePopup");  
const closePopupButton = document.querySelector("#closePopup"); 
const closeAddButton = document.querySelector("#closeAddPopup");
const popupElement = document.getElementById("popup"); // попап редактирования профиля 
const form = document.querySelector("#inputForm"); 
const nameInput = document.querySelector("#userName"); 
const jobInput = document.querySelector("#userData"); 

const openAddCard = document.querySelector("#openAddPopup"); //  кнопка добавления карточки 
const addCard = document.getElementById("addPopup"); // попап добавления карточек 

let nameReal = document.querySelector("#realName"); 
let jobReal = document.querySelector("#realData"); 

function openAddPopup(evt) {
  addCard.classList.remove("popup_opened");
}

function openPopup(evt) { 
  nameInput.value = nameReal.textContent; 
  jobInput.value = jobReal.textContent; 
  popupElement.classList.remove("popup_opened"); 
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
    popupElement.classList.add("popup_opened");
    addCard.classList.add("popup_opened");
  }
  

openPopupButton.addEventListener("click", openPopup); // Прикрепляем обработчик для открытия попапа редактирования профиля
openAddCard.addEventListener("click", openAddPopup); // Прикрепляем обработчик для открытия попапа добавления карточки
form.addEventListener("submit", savePopup); // Прикрепляем обработчик к форме для отправки

document.addEventListener('click', function(event) {  
    if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close-icon')) {  
      closeAllPopups();  
    }  
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      closeAllPopups();
    }
  });


// Создаем обработчик события submit для формы 
document.querySelector('#addForm').addEventListener('submit', function(event) { 
  event.preventDefault(); 
   // Откуда получаем данные
  const cardName = document.getElementById('cardName').value; 
  const cardImage = document.getElementById('cardData').value; 
 
  // Создаем новую карточку 
  const newCard = createCardElement(cardName, cardImage); 
 
  // Добавляем новую карточку в начало контейнера 
  const cardsContainer = document.querySelector('.elements'); 
  cardsContainer.insertBefore(newCard, cardsContainer.firstElementChild); 
 
  // Очищаем форму после добавления
  document.getElementById('addForm').reset(); 
  closeAllPopups();
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
  card.appendChild(likeButton); 
   
  return card; 
}
