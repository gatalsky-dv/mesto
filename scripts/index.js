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
const popupSave = document.querySelector('.popup__save');
const popupContainer = document.querySelector('.popup__container');
const popupImg = document.querySelector('.popup__img');
const popupText = document.querySelector('.popup__text');

// Находим форму в DOM
const popupEditUser = document.querySelector('.popup__edit_user'); // Воспользуйтесь методом querySelector()
const popupEditCard = document.querySelector('.popup__edit_card');
// Находим поля формы в DOM
const popupInputValueName = document.querySelector('.popup__input_value_name');
const popupInputValueJob = document.querySelector('.popup__input_value_job');
const popupInputValueTitle = document.querySelector('.popup__input_value_title');
const popupInputValueLink = document.querySelector('.popup__input_value_link');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', function () {
  openPopup(popupUser);
  popupInputValueName.value = profileName.textContent;
  popupInputValueJob.value = profileDescription.textContent;
});

profileCloseButton.addEventListener('click', function () {
  closePopup(popupUser);
});

cardAddButton.addEventListener('click', function () {
  openPopup(popupCard);
});

cardCloseButton.addEventListener('click', function () {
  closePopup(popupCard);
});

imageCloseButton.addEventListener('click', function () {
  closePopup(popupImage);
});

function formSubmitEditProfilePopup (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = popupInputValueName.value;
  profileDescription.textContent = popupInputValueJob.value;
  evt.target.reset();
  closePopup(popupUser);
}

popupEditUser.addEventListener('submit', formSubmitEditProfilePopup);

const elementTemplate = document.getElementById('element-template').content;
const elementsContainer = document.querySelector('.elements');

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
  return elementCard;
}

initialCards.forEach(elementCard => {renderCard(createCard(elementCard))});

function formSubmitCardPopup (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  renderCard(createCard({name: popupInputValueTitle.value, link: popupInputValueLink.value}));
  evt.target.reset();
  closePopup(popupCard);
}

popupEditCard.addEventListener('submit', formSubmitCardPopup);

const cardDelete = (el) => {
  el.closest('.element').remove();
}

const likeClick = (el) => {
  el.classList.toggle('element__heart_active');
}

elementsContainer.addEventListener('click', (evt) => {
  const el = evt.target;

  if (el.classList.contains('element__heart')) {
    likeClick(el);
    return;
  } 

  if (el.classList.contains('element__trash')) {
    cardDelete(el);
    return;
  }
       
  if (el.classList.contains('element__maskgroup')) {
    popupImg.src = el.src;
    popupImg.alt = el.alt;
    popupText.textContent = el.alt.substr(5);
    openPopup(popupImage);
    return;
  } 
});