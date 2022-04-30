const buttonOpenBtn = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const buttonCloseBtn = document.querySelector('.popup__close');


buttonOpenBtn.addEventListener('click', function (event) {
  
  popup.classList.toggle('popup_opened');
  
});

buttonCloseBtn.addEventListener('click', function (event) {
  
  currentPopup.classList.toggle('popup_opened');
  
});

// ----------------------------------------

// Находим форму в DOM
let formElement = document.querySelector('.popup__container'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__description'); // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let popupName = nameInput.value;
    let popupDescription = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    formElement = document.querySelector('.profile__info');
    nameInput = document.querySelector('.profile__name');
    jobInput = document.querySelector('.profile__description');

    // Вставьте новые значения с помощью textContent
    nameInput.textContent = popupName;
    jobInput.textContent = popupDescription;
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);