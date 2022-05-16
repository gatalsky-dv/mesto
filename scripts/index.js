// редактировать профиль
const profileEditButton = document.querySelector('.profile__edit');
const profileCloseButton = document.querySelector('.popup__close');
const cardAddButton = document.querySelector('.profile__add');
const popup = document.querySelector('.popup');
const popupTitle = document.querySelector('.popup__title');
const popupSave = document.querySelector('.popup__save');


// Находим форму в DOM
const popupEdit = document.querySelector('.popup__edit'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let popupInputValueName = document.querySelector('.popup__input_value_name');
let popupInputValueJob = document.querySelector('.popup__input_value_job');
let popupInputValueTitle = document.querySelector('.popup__input_value_title');
let popupInputValueLink = document.querySelector('.popup__input_value_link');


let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

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
  // titleInput.value.reset();
  // linkInput.value.reset();
}

function closeAddCardPopup() {
  popupInputValueTitle.classList.remove('popup__input_opened');
  popupInputValueLink.classList.remove('popup__input_opened');
  titleInput.value.reset();
  linkInput.value.reset();
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
popupEdit.addEventListener('submit', formSubmitEditProfilePopup);

//------------------ Практическая работа №5 --------------------


const popupAdd = document.querySelector('.popup-add');
const buttonCloseAdd = document.querySelector('.popup-add__close');

// const popupImg = document.querySelector('.popup-img');
// const buttonCloseImg = document.querySelector('.popup-img__close');

//const elementTemplate = document.querySelector('#element-template').content;
const elementTemplate = document.querySelector('.element');
let elementContainer = document.querySelector('.elements');


initialCards.forEach((item) => {
  let elementCard = document.querySelector('#element-template').content.querySelector('.element').cloneNode(true);
  //let elementCard = elementTemplate.querySelector('.element').cloneNode(true);
  elementCard.querySelector('.element__name').textContent = item.name;

  let img = elementCard.querySelector('.element__maskgroup');
  img.src = item.link;
  img.alt = `Фото ${item.name}`;

  elementContainer.append(elementCard);
});

// let formCard = document.querySelector('.popup-add__edit'); 

// let titleInput = document.querySelector('.popup-add__input_value_title');
// let linkInput = document.querySelector('.popup-add__input_value_link');

function cardSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  elementCard = elementTemplate.querySelector('.element').cloneNode(true);
  elementCard.querySelector('.element__name').textContent = titleInput.value;

  let elementMaskgroup = elementCard.querySelector('.element__maskgroup');
  elementMaskgroup.src = linkInput.value;
  elementMaskgroup.alt = `Фото ${titleInput.value}`;

  elementContainer.prepend(elementCard);
  closeAddCardPopup();
}

// formCard.addEventListener('submit', cardSubmitHandler);

const cardDelete = (evt) => {
  evt.target.closest('.element').remove();
}

const heartClickClose = (evt) => {
  evt.target.classList.remove('element__heart_active');
}

const heartClickActive = (evt) => {
  evt.target.classList.toggle('element__heart_active');
}

elementContainer.addEventListener('click', (evt) => {
  const el = evt.target;

  if (el.classList.value === 'element__heart') {
    evt.target.classList.toggle('element__heart_active');

  } else if (el.classList.value === 'element__trash') {
        cardDelete(evt);
        
      } else if (el.classList.value === 'element__maskgroup') {
        const popupPic = document.querySelector('.popup-img__pic');
        // popupPic.src = el.src;
        // popupPic.alt = el.alt;

        const popupPicName = document.querySelector('.popup-img__text');
        // popupPicName.textContent = el.alt.substr(5);

        // popupImgActive(evt);
      } else {
          return;
        }
});