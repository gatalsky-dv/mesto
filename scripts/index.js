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

const profileInfo = new UserInfo('.profile__name', '.profile__description');


const handleSubmitEditProfileForm = (data) => {
  profileInfo.setUserInfo(data);
}

const handleSubmitAddCardForm = (data) => {
  const newCard = {
    title: data.title,
    description: data.description,
  }

  const elementCard = createCard(newCard, 'element-template', popupWithImgOpen.open);
}

const popupWithImgOpen = new PopupWithImage('.popup_image');

popupWithImgOpen.setEventListeners();

const popupAddCardOpen = new PopupWithForm('.popup_card', handleSubmitAddCardForm);

popupAddCardOpen.setEventListeners()

const popupEditProfileOpen = new PopupWithForm('.popup_user', handleSubmitEditProfileForm);

popupEditProfileOpen.setEventListeners();

const FormValidators = {}

Array.from(document.forms).forEach((formElement) => {
  FormValidators[formElement.name] = new FormValidator(configValidator, formElement);
  FormValidators[formElement.name].enableValidation();
});

const createCard = (item, cardSelector, openPopupImg) => {
  console.log("temp: ", cardSelector);
  const card = new Card(item, cardSelector, openPopupImg);
  return card.createCard();
}

const cardsContainer = new Section({
  items: initialCards.reverse(),
  renderer: (item) => {
    debugger;
    const cardsContainerElement = createCard(item, 'element-template', popupWithImgOpen.open);
    cardsContainer.addItem(cardsContainerElement);
  }
}, elementTemplate);

cardsContainer.renderItems();

profileEditButton.addEventListener('click', () => {
  popupInputValueName.value = profileName.textContent;
  popupInputValueJob.value = profileDescription.textContent;
  FormValidators[popupEditUser.name].removeErrors();
  FormValidators[popupEditUser.name].unlockButton();
  popupEditProfileOpen.open();
});

cardAddButton.addEventListener('click', function () {
  popupEditCard.reset();
  FormValidators[popupEditCard.name].removeErrors();
  FormValidators[popupEditCard.name].lockButton();
  popupAddCardOpen.open();
});


// обработчики