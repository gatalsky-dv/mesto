const buttonOpenBtn = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const buttonCloseBtn = document.querySelector('.popup__close');

// Находим форму в DOM
let formElement = document.querySelector('.popup__edit'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_value_name');
let jobInput = document.querySelector('.popup__input_value_job');

let nameProfile = document.querySelector('.profile__name');
let descrProfile = document.querySelector('.profile__description');

function popupActive() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = descrProfile.textContent;
  popup.classList.add('popup_opened');
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

buttonOpenBtn.addEventListener('click', popupActive);
buttonCloseBtn.addEventListener('click', popupClose);

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  nameProfile.textContent = nameInput.value;
  descrProfile.textContent = jobInput.value;
  popupClose();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

//------------------ Практическая работа №5 --------------------

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const buttonOpenAdd = document.querySelector('.profile__add');
const popupAdd = document.querySelector('.popup-add');
const buttonCloseAdd = document.querySelector('.popup-add__close');

const popupImg = document.querySelector('.popup-img');
const buttonCloseImg = document.querySelector('.popup-img__close');

const popupCard = document.querySelector('.popup-add__card');
const elementTemplate = document.querySelector('#element-template').content;
const elementContainer = document.querySelector('.elements');

function popupAddCardActive() {
  popupAdd.classList.add('popup-add_opened');
}

function popupAddCardClose() {
  popupAdd.classList.remove('popup-add_opened');
}

function popupImgClose() {
  popupImg.classList.remove('popup-img_opened');
}

function popupImgActive(item) {
  popupImg.classList.add('popup-img_opened');
}

buttonOpenAdd.addEventListener('click', popupAddCardActive);
buttonCloseAdd.addEventListener('click', popupAddCardClose);
buttonCloseImg.addEventListener('click', popupImgClose);

initialCards.forEach((item) => {
  const elementCard = elementTemplate.querySelector('.element').cloneNode(true);
  elementCard.querySelector('.element__name').textContent = item.name;

  const img = elementCard.querySelector('.element__maskgroup');
  img.src = item.link;
  img.alt = `Фото ${item.name}`;

  elementContainer.append(elementCard);
});

const cardDelete = (evt) => {
  evt.target.closest('.element').remove();
}

const heartClickClose = (evt) => {
  evt.target.classList.remove('element__heart_active');
}

const heartClickActive = (evt) => {
  evt.target.classList.add('element__heart_active');

}

elementContainer.addEventListener('click', (evt) => {
  const el = evt.target;

  if (el.classList.value === 'element__heart') {
    heartClickActive(evt);
  } else if (el.classList.value === 'element__heart element__heart_active') {
    heartClickClose(evt);
    } else if (el.classList.value === 'element__trash') {
        cardDelete(evt);
      } else if (el.classList.value === 'element__maskgroup') {
        const popupPic = document.querySelector('.popup-img__pic');
        popupPic.src = el.src;
        popupPic.alt = el.alt;
        const popupPicName = document.querySelector('.popup-img__text');
        popupPicName.textContent = el.alt.substr(4);
        popupImgActive(evt);
      } else {
          return;
        }
});

// Находим форму в DOM
let cardElement = document.querySelector('.popup-add__edit'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let titleInput = document.querySelector('.popup-add__input_value_title');
let linkInput = document.querySelector('.popup-add__input_value_link');

let elementName = document.querySelector('.element__name');
let elementImg = document.querySelector('.element__maskgroup');

function formSubmitCard (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  elementName.textContent = titleInput.value;
  elementImg.src = linkInput.value;
  elementImg.alt = titleInput.value;

  console.log(elementName.textContent);
  console.log(elementImg.src);
  console.log(elementImg.alt);

  popupAddCardClose();
}

formElement.addEventListener('submit', formSubmitCard);