import {initialCards, configValidator} from './Card.js';
import FormValidator from './FormValidator.js';

// редактировать профиль
const profileEditButton = document.querySelector('.profile__edit');
const profileCloseButton = document.querySelector('.popup__close_user');
const cardCloseButton = document.querySelector('.popup__close_card');
const imageCloseButton = document.querySelector('.popup__close_image');
const cardAddButton = document.querySelector('.profile__add');
const popupUser = document.querySelector('.popup_user');
const popupCard = document.querySelector('.popup_card');
const popupImage = document.querySelector('.popup_image');
const popupImg = document.querySelector('.popup__img');
const popupText = document.querySelector('.popup__text');

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

const elementTemplate = document.getElementById('element-template').content;
const elementsContainer = document.querySelector('.elements');

const ESCAPE = 27;

// функции
const openPopup = (popupElement) => {
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

const createCard = ({name, link}) => {
  const elementCard = elementTemplate.querySelector('.element').cloneNode(true);
  const elementMaskgroup = elementCard.querySelector('.element__maskgroup');
  const elementHeart = elementCard.querySelector('.element__heart');
  const elementTrash = elementCard.querySelector('.element__trash');
  const elementName = elementCard.querySelector('.element__name');
  elementName.textContent = name;
  elementMaskgroup.src = link;
  elementMaskgroup.alt = `Фото ${name}`;
  elementMaskgroup.addEventListener('click', openPreviewPopup);
  elementHeart.addEventListener('click', clickHeart);
  elementTrash.addEventListener('click', deleteCard);
  return elementCard;
}

const handleSubmitAddCardForm = (evt) => {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  renderCard(createCard({name: popupInputValueTitle.value, link: popupInputValueLink.value}));
  evt.target.reset();
  closePopup(popupCard);
}

const openPreviewPopup = (evt) => {
  popupImg.src = evt.target.src;
  popupImg.alt = evt.target.alt;
  popupText.textContent = evt.target.alt.substr(5);
  openPopup(popupImage);
}

const deleteCard = (evt) => {
  evt.target.closest('.element').remove();
}

const clickHeart = (evt) => {
  evt.target.classList.toggle('element__heart_active');
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
  closePopup(popupImage);
});

popupEditUser.addEventListener('submit', handleSubmitEditProfileForm);

popupEditCard.addEventListener('submit', handleSubmitAddCardForm);

initialCards.forEach(elementCard => {renderCard(createCard(elementCard))});

