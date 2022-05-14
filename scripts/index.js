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
    name: 'Каменный Трейл',
    link: 'https://sun9-5.userapi.com/s/v1/if2/Ay6TaygJbyMwxk85v8tPtLH0ivAnm1A6prbpB4VmxfVcA8Em02vCECM-3aTYPvKBSix79Rk-uZpEqYr-VG0N6AS3.jpg?size=2560x1700&quality=95&type=album'
  },
  {
    name: 'Трейл Дикие Просторы',
    link: 'https://sun3-16.userapi.com/s/v1/if2/BTSQzIjCQ69R4pCWO28iBrHAry2YenkbRnMNV1RCb0YzmJln-Rznf917I2GLXaCgVFO3PFKEe5M-JJ-3efNSv79v.jpg?size=2560x1709&quality=95&type=album'
  },
  {
    name: 'Зимний трейл',
    link: 'https://sun9-10.userapi.com/s/v1/if1/z5wOJnO2v_njY4O8aBoUbMFQ4KdH8ehLlCCEdm8r2Gq4Puzi5yQRla5KwdYQFmHmWwhMrTIJ.jpg?size=2560x1709&quality=96&type=album'
  },
  {
    name: 'Трейл Северская Писаница',
    link: 'https://sun9-58.userapi.com/s/v1/if1/TIyzMo6zJJyQsN6ojj4nhRZ06tCeHB7E9PVCGmxAnLgTohRtpui2gbBT5f3bxz7l5vS_Npwm.jpg?size=2560x1700&quality=96&type=album'
  },
  {
    name: 'Скайраннинг Иремель',
    link: 'https://sun9-81.userapi.com/s/v1/if2/sOGJo9ogBMpKDU1I_cwFs84rA_8UAMK0T2V8GL4MTXeIhWckJHNj7vYVdItiYSAM0tatCEsqUD1vyqR1HPSlvObk.jpg?size=2560x1707&quality=95&type=album'
  },
  {
    name: 'Урал Ультра Трейл',
    link: 'https://sun9-73.userapi.com/s/v1/if2/lAdOdDF06_YwNy1wLVobxFMeBJk-8au45BN97G4vnth3CLpVR8y4Bb7hF7wuaKb9u-2xEY1M-VH9GGeBtU2lrf9V.jpg?size=2560x1702&quality=96&type=album'
  }
]; 

const elementTemplate = document.querySelector('#element-template').content;
const elementContainer = document.querySelector('.elements');


initialCards.forEach((item) => {
  const elementCard = elementTemplate.querySelector('.element').cloneNode(true);
  elementCard.querySelector('.element__name').textContent = item.name;
  const img = elementCard.querySelector('.element__maskgroup');
  img.src = item.link;
  img.alt = `Фото ${item.name}.`;
  elementContainer.append(elementCard);
});