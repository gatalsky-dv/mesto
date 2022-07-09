import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
  initialCards,
  configValidator,
} from '../components/PicturePopup.js';

import {
  profileEditButton,
  cardAddButton,
  elementsContainer,
  popupEditUser,
  popupEditCard,
} from '../utils/constants.js';

const formValidators = {}

Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(configValidator, formElement);
  formValidators[formElement.name].enableValidation();
});

const createCard = (item) => {
  const card = new Card(item, 'element-template', popupWithImgOpen);
  return card.cardСreation();
}

const handleSubmitEditProfileForm = (data) => {
  userInfo.setUserInfo(data);
}

const handleSubmitAddCardForm = (item) => {
  cardsContainer.addItem(createCard(item));
}

const popupWithImgOpen = new PopupWithImage('.popup_image');
popupWithImgOpen.setEventListeners();

const popupEditProfile = new PopupWithForm('.popup_user', handleSubmitEditProfileForm);
popupEditProfile.setEventListeners();

const popupAddCard = new PopupWithForm('.popup_card', handleSubmitAddCardForm);
popupAddCard.setEventListeners();

const userInfo = new UserInfo('.profile__name', '.profile__description');

const cardsContainer = new Section({
  items: initialCards.reverse(),
  renderer: (item) => cardsContainer.addItem(createCard(item)),
}, 
elementsContainer);

cardsContainer.renderItems();

profileEditButton.addEventListener('click', () => {
  formValidators[popupEditUser.name].removeErrors();
  formValidators[popupEditUser.name].unlockButton();
  const profileInfo = userInfo.getUserInfo();
  popupEditProfile.setInputValues(profileInfo);
  popupEditProfile.open();
});

cardAddButton.addEventListener('click', () => {
  formValidators[popupEditCard.name].removeErrors();
  formValidators[popupEditCard.name].lockButton();
  popupAddCard.open();
});