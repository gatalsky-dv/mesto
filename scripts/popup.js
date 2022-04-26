const popupOpenBtn = document.querySelector(".button__edit");
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".button__close");

popupOpenBtn.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("popup_opened");
  document.body.style.overflowY = "hidden";
});

popupCloseBtn.addEventListener("click", function (event) {
  const currentPopup = event.target.closest(".popup");
  currentPopup.classList.toggle("popup_opened");
  document.body.style.overflowY = "";
});

// ----------------------------------------
