import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

import {
  profileEditButton,
  cardAddButton,
  elementsContainer,
  elementTemplate,
  cardSelector,
  initialCards,
  configValidator,
} from './cards.js';

// редактировать профиль
// const profileEditButton = document.querySelector('.profile__edit');
// const cardAddButton = document.querySelector('.profile__add');
const popupUser = document.querySelector('.popup_user');
const popupCard = document.querySelector('.popup_card');
export const popupWithImage = document.querySelector('.popup_image');
const profileCloseButton = popupUser.querySelector('.popup__close_user');
const cardCloseButton = popupCard.querySelector('.popup__close_card');
const imageCloseButton = popupWithImage.querySelector('.popup__close_image');
export const popupImage = popupWithImage.querySelector('.popup__img');
export const popupText = popupWithImage.querySelector('.popup__text');

// Находим форму в DOM
const popupEditUser = document.querySelector('.popup__form_user'); // Воспользуйтесь методом querySelector()
const popupEditCard = document.querySelector('.popup__form_card');
// Находим поля формы в DOM
const popupInputValueName = popupEditUser.querySelector('.popup__input_value_name');
const popupInputValueJob = popupEditUser.querySelector('.popup__input_value_job');
const popupInputValueTitle = popupEditCard.querySelector('.popup__input_value_title');
const popupInputValueLink = popupEditCard.querySelector('.popup__input_value_link');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
// const elementsContainer = document.querySelector('.elements');
const popupList = document.querySelectorAll('.popup');



// функции

const FormValidators = {}

Array.from(document.forms).forEach((formElement) => {
  FormValidators[formElement.name] = new FormValidator(configValidator, formElement);
  FormValidators[formElement.name].enableValidation();
});

const handleSubmitEditProfileForm = (input) => {
  userInfo.setUserInfo(input);
}

const handleSubmitAddCardForm = (input) => {
  const newCard = {
    title: this._titleElement.textContent, 
    description: this._descriptionElement.textContent,
  }

}

// const cardElement = createCard()

const popupWithImgOpen = new PopupWithImage('.popup_image');
popupWithImgOpen.setEventListeners();

const popupEditProfile = new PopupWithForm('.popup_user', handleSubmitEditProfileForm);
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm('.popup_card', handleSubmitAddCardForm);
popupAddCard.setEventListeners();


const createCard = (item) => {
  const card = new Card({item}, cardSelector, popupWithImgOpen);
  return card.createCard();
}

const cardsContainer = new Section({
  items: initialCards.reverse(),
  renderer: createCard,
}, elementsContainer);

cardsContainer.renderItems();

const handleCardSubmit = (item) => {
  cardsContainer.addItem(item);
}


const userInfo = new UserInfo('.profile__name', '.profile__description');


// обработчики


profileEditButton.addEventListener('click', () => {
  FormValidators[popupEditUser.name].removeErrors();
  FormValidators[popupEditUser.name].unlockButton();
  const profileInfo = userInfo.getUserInfo();
  popupEditProfile.setInputValues(profileInfo);
 
  popupEditProfile.open();
});

// profileCloseButton.addEventListener('click', function () {
//   closePopup(popupUser);
// });

cardAddButton.addEventListener('click', function () {
  popupEditCard.reset();
  FormValidators[popupEditCard.name].removeErrors();
  FormValidators[popupEditCard.name].lockButton();

});

// cardCloseButton.addEventListener('click', function () {
//   closePopup(popupCard);
// });

// imageCloseButton.addEventListener('click', function () {
//   closePopup(popupWithImage);
// });

popupEditUser.addEventListener('submit', handleSubmitEditProfileForm);

popupEditCard.addEventListener('submit', handleSubmitAddCardForm);