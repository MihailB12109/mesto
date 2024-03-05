
const addCard = document.getElementById("addPopup");
const nameInput = document.querySelector("#userName");
const jobInput = document.querySelector("#userData");
const popupElement = document.getElementById("popup");
const popupMax = document.getElementById('popupMax');
let nameReal = document.querySelector("#realName");
let jobReal = document.querySelector("#realData");

export function openAddPopup(evt) {
    addCard.classList.remove('popup');
    addCard.classList.remove('popup_hidden');
    addCard.classList.add('popup_opened');
}

export function openPopup(evt) {
    nameInput.value = nameReal.textContent;
    jobInput.value = jobReal.textContent;
    popupElement.classList.remove('popup');
    popupElement.classList.remove('popup_hidden');
    popupElement.classList.add('popup_opened');
}

export function savePopup(evt) {
    evt.preventDefault();
    // Получаем значение полей jobInput и nameInput из свойства value  
    nameReal.textContent = nameInput.value;
    jobReal.textContent = jobInput.value;
    closeAllPopups();
}

export function closeAllPopups() {
    if (popupElement.classList.contains('popup_opened')) {
        popupElement.classList.add('popup');
        popupElement.classList.remove('popup_opened');
        setTimeout(() => {
            popupElement.classList.add('popup_hidden');
        }, 300);
    }
    else if (addCard.classList.contains('popup_opened')) {
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
            newEmail.style.marginBottom = '28px';
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

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
      closeAllPopups();
    }
  });
  
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('popup_opened') || event.target.classList.contains('popupMax') || event.target.classList.contains('popup__close-icon')) {
      closeAllPopups();
    }
  });