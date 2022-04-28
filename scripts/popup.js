const buttonOpenBtn = document.querySelector('.button__edit');
const popup = document.querySelector('.popup');
const buttonCloseBtn = document.querySelector('.button__close');
const buttonSaveBtn = document.querySelector('.button__save')

buttonOpenBtn.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.toggle('popup_opened');
  document.body.style.overflowY = 'hidden';
});

buttonCloseBtn.addEventListener('click', function (event) {
  const currentPopup = event.target.closest('.popup');
  currentPopup.classList.toggle('popup_opened');
  document.body.style.overflowY = '';
});

// ----------------------------------------

// Находим форму в DOM
let formElement = document.querySelector('.popup'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__description'); // Воспользуйтесь инструментом .querySelector()

// console.log(document.querySelector('.profile__name'));
 console.log(nameInput.value);
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

buttonSaveBtn.addEventListener('click', function (event) {
  const currentPopup = event.target.closest('.popup');
  currentPopup.classList.toggle('popup_opened');
  document.body.style.overflowY = '';
  formSubmitHandler;

});