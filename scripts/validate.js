const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_error_visible'
}

// Функция, которая добавляет класс с ошибкой

const showInputError = (formElement, inputElement, errorMessage, inputErrorModifier, errorSelector) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorSelector);
  // Инпуту добавим модификатор
  inputElement.classList.add(inputErrorModifier);
};

// Функция, которая удаляет класс с ошибкой 

const hideInputError = (formElement, inputElement, inputErrorModifier, errorSelector) => {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = '';
  errorElement.classList.remove(errorSelector);
  // Очистим ошибку
  inputElement.classList.remove(inputErrorModifier);
};

// Функция, которая проверяет валидность поля

const checkInputValidity = (formElement, inputElement, inputErrorModifier, errorSelector) => {
  if (!inputElement.validity.valid) {
    const errorMessage = inputElement.validationMessage;
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, errorMessage, inputErrorModifier, errorSelector);
  } else {
    // Если проходит, скрываем
    hideInputError(formElement, inputElement, inputErrorModifier, errorSelector);
  }
};

const setEventListeners = (formElement, config) => {
  // Найдём все поля формы и сделаем из них массив
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, config.inputErrorClass, config.errorClass);
      toggleButtonState(inputList, formElement, config.submitButtonSelector, config.inactiveButtonClass);
    });
  });
};

const enableValidation = (config) => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement, config);
  });
};

// Функция принимает массив полей
const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  });
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, formElement, buttonSelector, disabledSelector) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    lockButton(formElement, buttonSelector, disabledSelector);
  } else {
    // иначе сделай кнопку активной
    unlockButton(formElement, buttonSelector, disabledSelector);
  }
};

const lockButton = (formElement, buttonSelector, disabledSelector) => {
  const lockSaveButton = formElement.querySelector(buttonSelector);
  lockSaveButton.disabled = true;
  lockSaveButton.classList.add(disabledSelector);
};

const unlockButton = (formElement, buttonSelector, disabledSelector) => {
  const unlockSaveButton = formElement.querySelector(buttonSelector);
  unlockSaveButton.disabledSelector = false;
  unlockSaveButton.disabled = false;
  unlockSaveButton.classList.remove(disabledSelector);
};

// Вызовем функцию

enableValidation(config);