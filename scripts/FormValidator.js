

export class FormValidator {
  constructor(configValidator, formElement) {
    this._inputSelector = configValidator.inputSelector;
    this._submitButtonSelector = configValidator.submitButtonSelector;
    this._inactiveButtonClass = configValidator.inactiveButtonClass;
    this._inputErrorClass = configValidator.inputErrorClass;
    this._errorClass = configValidator.errorClass;
    this._formElement = formElement;
  }

  // Функция, которая добавляет класс с ошибкой
  _showInputError = (inputElement, errorMessage) => {
    // Находим элемент ошибки внутри самой функции
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    // Заменим содержимое span с ошибкой на переданный параметр
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
    // Инпуту добавим модификатор
    inputElement.classList.add(this._inputErrorClass);
  };
  
  // Функция, которая удаляет класс с ошибкой 
  _hideInputError = (inputElement) => {
    // Находим элемент ошибки
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
    // Очистим ошибку
    inputElement.classList.remove(this._inputErrorClass);
  };

// Функция, которая проверяет валидность поля

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      const errorMessage = inputElement.validationMessage;
    // Если поле не проходит валидацию, покажем ошибку
      this._showInputError(inputElement, errorMessage);
    } else {
    // Если проходит, скрываем
      this._hideInputError(inputElement);
    }
  };

  // Функция принимает массив полей
  _hasInvalidInput = (inputList) => {
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
  _toggleButtonState = (inputList, formElement, buttonSelector, disabledSelector) => {
  // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
      _lockButton(formElement, buttonSelector, disabledSelector);
    } else {
    // иначе сделай кнопку активной
      _unlockButton(formElement, buttonSelector, disabledSelector);
    }
  };

  _lockButton = (buttonSelector, disabledSelector) => {
    const lockSaveButton = this._formElement.querySelector(buttonSelector);
    lockSaveButton.disabled = true;
    lockSaveButton.classList.add(disabledSelector);
  };
  
  _unlockButton = (buttonSelector, disabledSelector) => {
    const unlockSaveButton = this._formElement.querySelector(buttonSelector);
    unlockSaveButton.disabledSelector = false;
    unlockSaveButton.disabled = false;
    unlockSaveButton.classList.remove(disabledSelector);
  };

  
  enableValidation = () => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const saveButton = this._formElement.querySelector(this._submitButtonSelector);
    // Переберём полученную коллекцию
    formList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(formList, saveButton);
      });
    });
    this._toggleButtonState(formList, saveButton);
  }

}

export default FormValidator;





// const setEventListeners = (formElement, config) => {
//   // Найдём все поля формы и сделаем из них массив
//   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement, config.inputErrorClass, config.errorClass);
//       toggleButtonState(inputList, formElement, config.submitButtonSelector, config.inactiveButtonClass);
//     });
//   });
// };








// Вызовем функцию

// enableValidation(configValidator);