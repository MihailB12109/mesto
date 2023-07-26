const openPopupButton = document.querySelector("#openPopup");
const savePopupButton = document.querySelector("#savePopup");
const closePopupButton = document.querySelector("#closePopup")
const youName = document.querySelector("#userName");
const about = document.querySelector("#userData");
const popupElement = document.getElementById("popup");

let nameValue = document.querySelector("#realName");
let dataValue = document.querySelector("#realData");

function openPopup() {
    popupElement.classList.add("popup_opened");
    popupElement.classList.remove("popup")
    youName.value = nameValue.textContent;
    about.value = dataValue.textContent;
}

function savePopup() {
    popupElement.classList.remove("popup_opened");
    popupElement.classList.add("popup");
    nameValue.textContent = youName.value;
    dataValue.textContent = about.value;
}

function closePopup() {
    popupElement.classList.add("popup");
}



openPopupButton.addEventListener("click", openPopup);
savePopupButton.addEventListener("click", savePopup);
closePopupButton.addEventListener("click", closePopup);

