const buttonOpenBtn = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const buttonCloseBtn = document.querySelector('.popup__close');

// Находим форму в DOM
let formElement = document.querySelector('.popup__edit'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_value_name');
let jobInput = document.querySelector('.popup__input_value_job');

let nameProfile = document.querySelector('.profile__name');
let descrProfile = document.querySelector('.profile__description');

function popupActive() {
  popup.classList.toggle('popup_opened');
}

buttonOpenBtn.addEventListener('click', popupActive);
nameInput.value = nameProfile.textContent;
jobInput.value = descrProfile.textContent;

buttonCloseBtn.addEventListener('click', popupActive);

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  nameProfile.textContent = nameInput.value;
  descrProfile.textContent = jobInput.value;
  popupActive();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);