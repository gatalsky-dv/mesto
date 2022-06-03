// редактировать профиль
const profileEditButton = document.querySelector('.profile__edit');
const profileCloseButton = document.querySelector('.popup__close_user');
const cardCloseButton = document.querySelector('.popup__close_card');
const imageCloseButton = document.querySelector('.popup__close_image');
const cardAddButton = document.querySelector('.profile__add');
const popupUser = document.querySelector('.popup_user');
const popupCard = document.querySelector('.popup_card');
const popupImage = document.querySelector('.popup_image');
const popupTitle = document.querySelector('.popup__title');
const popupButtonSave = document.querySelector('.popup__button');
const popupContainer = document.querySelector('.popup__container');
const popupImg = document.querySelector('.popup__img');
const popupText = document.querySelector('.popup__text');
// const popupButton = document.querySelector('.popup__button');

// Находим форму в DOM
const popupForm = document.querySelector('.popup__form');
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
  document.addEventListener('keydown', pressEscape);
  document.addEventListener('mousedown', closeOverlay);
  removeErrors(popupElement);
}

const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', pressEscape);
  document.removeEventListener('mousedown', closeOverlay);
}

const pressEscape = (evt) => {
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
  const elementName = elementCard.querySelector('.element__name');
  elementName.textContent = name;
  elementMaskgroup.src = link;
  elementMaskgroup.alt = `Фото ${name}`;
  document.addEventListener('click', deleteCard);
  document.addEventListener('click', clickHeart);
  document.addEventListener('click', openPreviewPopup);
  return elementCard;
}

const handleSubmitAddCardForm = (evt) => {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  renderCard(createCard({name: popupInputValueTitle.value, link: popupInputValueLink.value}));
  evt.target.reset();
  closePopup(popupCard);
}

const openPreviewPopup = (evt) => {
  if (evt.target.classList.contains('element__maskgroup')) {
    popupImg.src = evt.target.src;
    popupImg.alt = evt.target.alt;
    popupText.textContent = evt.target.alt.substr(5);
    openPopup(popupImage);
    return;
  }
}

const deleteCard = (evt) => {
  if (evt.target.classList.contains('element__trash')) {
  evt.target.closest('.element').remove();
  return;
  }
}

const clickHeart = (evt) => {
  if (evt.target.classList.contains('element__heart')) {
    evt.target.classList.toggle('element__heart_active');
    return;
  }
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

const lockButton = (buttonDisabled) => {
  const submitButton = buttonDisabled.querySelector('.popup__button');
  submitButton.disabled = true;
  submitButton.classList.add('popup__button_disabled');
}

// обработчики

profileEditButton.addEventListener('click', function () {
  popupInputValueName.value = profileName.textContent;
  popupInputValueJob.value = profileDescription.textContent;
  openPopup(popupUser);
});

profileCloseButton.addEventListener('click', function () {
  closePopup(popupUser);
});

cardAddButton.addEventListener('click', function () {
  popupInputValueTitle.value = '';
  popupInputValueLink.value = '';
  lockButton(popupCard);
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

