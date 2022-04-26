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

// Находим форму в DOM
let formElement = // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = // Воспользуйтесь инструментом .querySelector()
let jobInput = // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 