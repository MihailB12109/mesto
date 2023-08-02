const openPopupButton = document.querySelector("#openPopup");
const savePopupButton = document.querySelector("#savePopup");
const closePopupButton = document.querySelector("#closePopup");
const popupElement = document.getElementById("popup");
const form = document.querySelector("#inputForm");
const nameInput = document.querySelector("#userName");
const jobInput = document.querySelector("#userData");

let nameReal = document.querySelector("#realName");
let jobReal = document.querySelector("#realData");

function openPopup(evt) {
    nameInput.value = nameReal.textContent;
    jobInput.value = jobReal.textContent;
    popupElement.classList.remove("popup_opened");
}
// Обработчик «отправки» формы, хотя пока 
// она никуда отправляться не будет 
function savePopup(evt) {
    evt.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value 
    nameReal.textContent = nameInput.value;
    jobReal.textContent = jobInput.value;
    closePopup();
}

function closePopup(evt) {
    popupElement.classList.add("popup_opened");
}

openPopupButton.addEventListener("click", openPopup);
// Прикрепляем обработчик к форме: 
// он будет следить за событием “submit” - «отправка» 
form.addEventListener("submit", savePopup);
closePopupButton.addEventListener("click", closePopup);

