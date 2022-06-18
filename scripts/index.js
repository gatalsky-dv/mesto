import {Card} from './Card.js';
import {initialCards, configValidator} from './cards.js';
import FormValidator from './FormValidator.js';

// редактировать профиль
const profileEditButton = document.querySelector('.profile__edit');
const profileCloseButton = document.querySelector('.popup__close_user');
const cardCloseButton = document.querySelector('.popup__close_card');
const imageCloseButton = document.querySelector('.popup__close_image');
const cardAddButton = document.querySelector('.profile__add');
const popupUser = document.querySelector('.popup_user');
const popupCard = document.querySelector('.popup_card');
export const popupWithImage = document.querySelector('.popup_image');
export const popupImage = document.querySelector('.popup__img');
export const popupText = document.querySelector('.popup__text');

// Находим форму в DOM
const popupEditUser = document.querySelector('.popup__form_user'); // Воспользуйтесь методом querySelector()
const popupEditCard = document.querySelector('.popup__form_card');
// Находим поля формы в DOM
const popupInputValueName = document.querySelector('.popup__input_value_name');
const popupInputValueJob = document.querySelector('.popup__input_value_job');
const popupInputValueTitle = document.querySelector('.popup__input_value_title');
const popupInputValueLink = document.querySelector('.popup__input_value_link');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const elementsContainer = document.querySelector('.elements');

const ESCAPE = 27;

// функции
export const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', handlePressEscape);
  document.addEventListener('mousedown', closeOverlay);
}

const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', handlePressEscape);
  document.removeEventListener('mousedown', closeOverlay);
}

const handlePressEscape = (evt) => {
  if (evt.keyCode === ESCAPE) {
    const openedPopupKeydown = document.querySelector('.popup_opened'); 
    closePopup(openedPopupKeydown);
  }
}

const closeOverlay = (evt) => {
  const openedPopupMousedown = document.querySelector('.popup_opened');
  if (evt.target === openedPopupMousedown){
    closePopup(openedPopupMousedown);
  }
}

const handleSubmitEditProfileForm = (evt) => {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = popupInputValueName.value;
  profileDescription.textContent = popupInputValueJob.value;
  evt.target.reset();
  closePopup(popupUser);
}

const renderCard = (elementCard) => {
  elementsContainer.prepend(elementCard);
}

initialCards.forEach(item => {
  const elementCard = new Card(item.name, item.link, 'element-template');
  const elementCardCreat = elementCard.createCard();
  renderCard(elementCardCreat);
});

const handleSubmitAddCardForm = (evt) => {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const elementCard = new Card(popupInputValueTitle.value, popupInputValueLink.value, 'element-template');
  const elementCardCreat = elementCard.createCard();
  renderCard(elementCardCreat);
  evt.target.reset();
  closePopup(popupCard);
}

const removeErrors = (formElement) => {
  const inputArray = Array.from(formElement.querySelectorAll('.popup__input'));
  inputArray.forEach(removeSelectors);
}

const removeSelectors = (inputElement) => {
  inputElement.classList.remove('popup__input_type_error');
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = '';
  errorElement.classList.remove('popup__input_error_visible');
}

const FormValidators = {}

Array.from(document.forms).forEach((formElement) => {
  FormValidators[formElement.name] = new FormValidator(configValidator, formElement);
  FormValidators[formElement.name].enableValidation();
});

// обработчики

profileEditButton.addEventListener('click', function () {
  popupInputValueName.value = profileName.textContent;
  popupInputValueJob.value = profileDescription.textContent;
  removeErrors(popupUser);
  FormValidators[popupEditUser.name].unlockButton();
  openPopup(popupUser);
});

profileCloseButton.addEventListener('click', function () {
  closePopup(popupUser);
});

cardAddButton.addEventListener('click', function () {
  popupInputValueTitle.value = '';
  popupInputValueLink.value = '';
  FormValidators[popupEditCard.name].lockButton();
  removeErrors(popupCard);
  openPopup(popupCard);
});

cardCloseButton.addEventListener('click', function () {
  closePopup(popupCard);
});

imageCloseButton.addEventListener('click', function () {
  closePopup(popupWithImage);
});

popupEditUser.addEventListener('submit', handleSubmitEditProfileForm);

popupEditCard.addEventListener('submit', handleSubmitAddCardForm);

