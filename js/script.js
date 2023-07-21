const openPopupButton = document.querySelector("#openPopup");
const savePopupButton = document.querySelector("#savePopup");
const closePopupButton = document.querySelector("#closePopup")
const popup = document.querySelector("#popup");
const youName = document.querySelector("#userName");
const about = document.querySelector("#userData");

let nameValue = document.querySelector("#realName");
let dataValue = document.querySelector("#realData");

function openPopup() {
    document.getElementById("popup").classList.remove("popup_opened");
    youName.value = nameValue.textContent;
    about.value = dataValue.textContent;
}

function savePopup() {
    document.getElementById("popup").classList.add("popup_opened");
    nameValue.textContent = youName.value;
    dataValue.textContent = about.value;
}

function closePopup() {
    document.getElementById("popup").classList.add("popup_opened");
}



openPopupButton.addEventListener("click", openPopup);
savePopupButton.addEventListener("click", savePopup);
closePopupButton.addEventListener("click", closePopup);

