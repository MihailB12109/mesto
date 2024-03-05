export function createCardElement(name, image) {
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
    cardImageElem.addEventListener('click', () =>
      openImage(cardImageElem));
  
  
    return card;
  }

  export function likeClick(event) {
    const likeButton = event.target;
    likeButton.classList.toggle('element__button-like_active');
  }