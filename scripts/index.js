// редактировать профиль
const profileEditButton = document.querySelector('.profile__edit');
const profileCloseButton = document.querySelector('.popup__close');
const cardAddButton = document.querySelector('.profile__add');
const popup = document.querySelector('.popup');
const popupTitle = document.querySelector('.popup__title');
const popupSave = document.querySelector('.popup__save');
const popupContainer = document.querySelector('.popup__container');
const popupImg = document.querySelector('.popup__img');
const popupText = document.querySelector('.popup__text');


// Находим форму в DOM
const popupEdit = document.querySelector('.popup__edit'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const popupInputValueName = document.querySelector('.popup__input_value_name');
const popupInputValueJob = document.querySelector('.popup__input_value_job');
const popupInputValueTitle = document.querySelector('.popup__input_value_title');
const popupInputValueLink = document.querySelector('.popup__input_value_link');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

function openPopup() {
  popup.classList.add('popup_opened');
  popupTitle.classList.add('popup__title_opened');
  popupSave.classList.add('popup__save_opened');
}

function openEditProfilePopup() {
  popupInputValueName.value = profileName.textContent;
  popupInputValueJob.value = profileDescription.textContent;
  popupTitle.textContent = 'Редактировать профиль';
  popupInputValueName.classList.add('popup__input_opened');
  popupInputValueJob.classList.add('popup__input_opened');
  popupSave.textContent = 'Сохранить';
  openPopup();
}

function openAddCardPopup() {
  popupTitle.textContent = 'Новое место';
  popupInputValueTitle.classList.add('popup__input_opened');
  popupInputValueLink.classList.add('popup__input_opened');
  popupSave.textContent = 'Создать';
  openPopup();
}

function closePopup() {
  popup.classList.remove('popup_opened');
  popup.classList.remove('popup_opened_img');
  popupTitle.classList.remove('popup__title_opened');
  popupSave.classList.remove('popup__save_opened');
  popupTitle.textContent = '';
  popupSave.textContent = '';
  
}

function closeEditProfilePopup() {
  popupInputValueName.classList.remove('popup__input_opened');
  popupInputValueJob.classList.remove('popup__input_opened');

  popupInputValueTitle.classList.remove('popup__input_opened');
  popupInputValueLink.classList.remove('popup__input_opened');
  closePopup();
  popup.classList.remove('popup_opened');
  popupImg.classList.remove('popup__img_opened');
  popupContainer.classList.remove('popup__container_opened');
  popupText.classList.remove('popup__text_opened');
  popupInputValueTitle.value = '';
  popupInputValueLink.value = '';
}

function closeAddCardPopup() {
  popupInputValueTitle.classList.remove('popup__input_opened');
  popupInputValueLink.classList.remove('popup__input_opened');
  popupInputValueTitle.value = '';
  popupInputValueLink.value = '';
  closePopup();
}

profileEditButton.addEventListener('click', openEditProfilePopup);
profileCloseButton.addEventListener('click', closeEditProfilePopup);
cardAddButton.addEventListener('click', openAddCardPopup);
// cardAddButton.addEventListener('click', closeAddCardPopup);

function formSubmitEditProfilePopup (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  profileName.textContent = popupInputValueName.value;
  profileDescription.textContent = popupInputValueJob.value;
  closeEditProfilePopup();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
// popupEdit.addEventListener('submit', formSubmitEditProfilePopup);

//------------------ Практическая работа №5 --------------------


const elementTemplate = document.querySelector('#element-template').content;
const elementContainer = document.querySelector('.elements');
const elementCard = elementTemplate.querySelector('.element');
const elementMaskgroup = elementCard.querySelector('.element__maskgroup');
const elementName = elementCard.querySelector('.element__name');

const renderCard = (item) => {
  elementCard.cloneNode(true);
}

const createCard = ({name, link}) => {
  elementName.textContent = name;
  elementMaskgroup.src = link;
  elementMaskgroup.alt = `Фото ${name}`;
}

initialCards.forEach((item) => {
  renderCard(item);
  createCard(item);
  elementContainer.append(elementCard.cloneNode(true));
});



function cardSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  createCard({name: popupInputValueTitle.value, link: popupInputValueLink.value});
  elementContainer.prepend(elementCard.cloneNode(true));
  closeAddCardPopup();
}

popupEdit.addEventListener('submit', cardSubmitHandler);

const cardDelete = (el) => {
  el.closest('.element').remove();
}

const likeClick = (el) => {
  el.classList.toggle('element__heart_active');
}

const popupImgActive = (el) => {
  popup.classList.add('popup_opened_img');
  popupContainer.classList.add('popup__container_opened');
  popupImg.classList.add('popup__img_opened');
  popupText.classList.add('popup__text_opened');
}

elementContainer.addEventListener('click', (evt) => {
  const el = evt.target;

  if (el.classList.value === 'element__heart' || el.classList.value === 'element__heart element__heart_active') {
    likeClick(el);
  } 

  if (el.classList.value === 'element__trash') {
        cardDelete(el);
  }
       
  if (el.classList.value === 'element__maskgroup') {
    popupImg.src = el.src;
    popupImg.alt = el.alt;
    popupText.textContent = el.alt.substr(5);

    popupImgActive(el);
  } 
});