const openPopupButton = document.querySelector("#openPopup");
const savePopupButton = document.querySelector("#savePopup");
const closePopupButton = document.querySelector("#closePopup");
const popupElement = document.getElementById("popup");
const form = document.querySelector("#inputForm");
const nameInput = document.querySelector("#userName");
const jobInput = document.querySelector("#userData");

let nameReal = document.querySelector("#realName");
let jobReal = document.querySelector("#realData");

function openPopup() {
    nameInput.value = nameReal.textContent;
    jobInput.value = jobReal.textContent;
    popupElement.classList.remove("popup");
    popupElement.classList.add("popup_opened");
}
// Обработчик «отправки» формы, хотя пока 
// она никуда отправляться не будет 
function savePopup(evt) {
    evt.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value 
    const nameForm = nameInput.value;
    const jobForm = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей 
    const nameOutput = nameReal;
    const jobOutput = jobReal;

    // Вставьте новые значения с помощью textContent 
    nameOutput.textContent = nameForm;
    jobOutput.textContent = jobForm;

    popupElement.classList.remove("popup_opened");
    popupElement.classList.add("popup");
}

function closePopup() {
    popupElement.classList.remove("popup_opened");
    popupElement.classList.add("popup");
}


openPopupButton.addEventListener("click", openPopup);
// Прикрепляем обработчик к форме: 
// он будет следить за событием “submit” - «отправка» 
form.addEventListener("submit", savePopup);
closePopupButton.addEventListener("click", closePopup);

