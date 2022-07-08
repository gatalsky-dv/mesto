import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
  profileEditButton,
  cardAddButton,
  elementsContainer,
  cardSelector,
  popupEditUser,
  popupEditCard,
  initialCards,
  configValidator,
} from '../components/PicturePopup.js';

const FormValidators = {}

Array.from(document.forms).forEach((formElement) => {
  FormValidators[formElement.name] = new FormValidator(configValidator, formElement);
  FormValidators[formElement.name].enableValidation();
});

const handleSubmitEditProfileForm = (data) => {
  userInfo.setUserInfo(data);
}

const handleSubmitAddCardForm = (item) => {
  cardsContainer.addItem(item, cardSelector, popupWithImgOpen);
}

const popupWithImgOpen = new PopupWithImage('.popup_image');
popupWithImgOpen.setEventListeners();

const popupEditProfile = new PopupWithForm('.popup_user', handleSubmitEditProfileForm);

const popupAddCard = new PopupWithForm('.popup_card', handleSubmitAddCardForm);

const userInfo = new UserInfo('.profile__name', '.profile__description');

const createCard = (item) => {
  const card = new Card({item}, cardSelector, popupWithImgOpen);
  return card.createCard();
}

const cardsContainer = new Section({
  items: initialCards.reverse(),
  renderer: createCard,
}, elementsContainer);

cardsContainer.renderItems();

profileEditButton.addEventListener('click', () => {
  FormValidators[popupEditUser.name].removeErrors();
  FormValidators[popupEditUser.name].unlockButton();
  const profileInfo = userInfo.getUserInfo();
  popupEditProfile.setInputValues(profileInfo);
  popupEditProfile.open();
});

cardAddButton.addEventListener('click', () => {
  FormValidators[popupEditCard.name].removeErrors();
  FormValidators[popupEditCard.name].lockButton();
  popupAddCard.open();
});