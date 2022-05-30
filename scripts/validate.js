// enableValidation({
//   formSelector: '.popup__form',                   //.popup__edit
//   inputSelector: '.popup__input',                 //.popup__input
//   submitButtonSelector: '.popup__button',         //.popup__save
//   inactiveButtonClass: 'popup__button_disabled',  //.popup__save_disabled
//   inputErrorClass: 'popup__input_type_error',     //popup__input_type_error
//   errorClass: 'popup__error_visible'              //popup__error_visible
// }); 

// enableValidation({
//   formSelector: '.popup__edit',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__save',
//   inactiveButtonClass: 'popup__save_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// }); 

// const config ={
//   formSelector: 'popup__edit',
//   inputSelector: 'popup__input',
//   submitButtonSelector: 'popup__save',
//   inactiveButtonClass: 'popup__save_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// }
//                         //inputConfig
// const showInputError = (formElement, inputElement, errorMessage, inputErrorModifier, errorSelector) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

//   inputElement.classList.add(inputErrorModifier);

//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(errorSelector);
// };

// const hideInputError = (formElement, inputElement, inputErrorModifier, errorSelector) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   errorElement.classList.remove(errorSelector);
//   inputElement.classList.remove(inputErrorModifier);
//   errorElement.textContent = '';
// };

// const toggleButtonState = (inputList, saveButton, disabledSelector) => {
//   if (hasInvalidInput(inputList)) {
//     saveButton.classList.add(disabledSelector);
//     saveButton.disabledSelector = true;
//   } else {
//     saveButton.classList.remove(disabledSelector);
//     saveButton.disabledSelector = false;
//   }
// };
//                                         //valid1
// const setEventListener = (formElement, inputSelector, submitButtonSelector, errorClass, inputErrorClass, inactiveButtonClass) => {
//   const inputList = Array.from(formElement.querySelectorAll(`.${inputSelector}`));
//   console.log('123');
//   const saveButton = formElement.querySelector(`.${submitButtonSelector}`);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//     checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
//     toggleButtonState(inputList, saveButton, inactiveButtonClass);
//     });
//   });
// };

// const enableValidation = (validConfig) => {
//   const {formSelector} = validConfig;
//   const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     setEventListener(formElement, validConfig);
//   });
// };

// enableValidation(config);

// enableValidation({
//   formSelector: '.popup__edit',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__save',
//   inactiveButtonClass: 'popup__save_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });

const formElement = document.querySelector('.popup__edit');
const formInput = formElement.querySelector('.popup__input');

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

formInput.addEventListener('input', (evt) => {
  console.log(evt.target.validity.valid);
});