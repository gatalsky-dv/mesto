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

function openEditProfilePopup() {
  popupUser.classList.add('popup_opened');
  popupInputValueName.value = profileName.textContent;
  popupInputValueJob.value = profileDescription.textContent;
}

function closeEditProfilePopup() {
  popupUser.classList.remove('popup_opened');
}

function openAddCardPopup() {
  popupCard.classList.add('popup_opened');
}

function closeAddCardPopup() {
  popupCard.classList.remove('popup_opened');
}

function openImagePopup() {
  popupImage.classList.add('popup_opened');
}

function closeImagePopup() {
  popupImage.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', openEditProfilePopup);
profileCloseButton.addEventListener('click', closeEditProfilePopup);
cardAddButton.addEventListener('click', openAddCardPopup);
cardCloseButton.addEventListener('click', closeAddCardPopup);
imageCloseButton.addEventListener('click', closeImagePopup);

function formSubmitEditProfilePopup (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = popupInputValueName.value;
  profileDescription.textContent = popupInputValueJob.value;
  evt.target.reset();
  closeEditProfilePopup();
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
  // elementsContainer.prepend(elementCard);
  return elementCard;
}

initialCards.forEach(elementCard => {renderCard(createCard(elementCard))});

function formSubmitCardPopup (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  renderCard(createCard({name: popupInputValueTitle.value, link: popupInputValueLink.value}));
  evt.target.reset();
  closeAddCardPopup();
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
    openImagePopup(el);
    return;
  } 
});