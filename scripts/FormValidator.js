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
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
    inputElement.classList.add(this._inputErrorClass);
  }
  
  // Функция, которая удаляет класс с ошибкой 
  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
    // Очистим ошибку
    inputElement.classList.remove(this._inputErrorClass);
  }

// Функция, которая проверяет валидность поля
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      const errorMessage = inputElement.validationMessage;
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // Функция принимает массив полей
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // Функция принимает массив полей ввода
  // и элемент кнопки, состояние которой нужно менять
  _toggleButtonState(inputList) {
    // 
    if (this._hasInvalidInput(inputList)) {
      console.log('че тут?');
      // console.log(lockButton);
      lockButton();
    } else {
      unlockButton();
    }
  }

  enableValidation() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        // (inputList, formElement, config.submitButtonSelector, config.inactiveButtonClass); popup__button_disabled
        this._toggleButtonState(inputList);
      });
    });
    // this._toggleButtonState(inputList, formElement, saveButton, inactiveButton);
  }

  lockButton = () => {
    const lockSaveButton = this._formElement.querySelector(this._submitButtonSelector);
    console.log('первый- ', lockSaveButton.disabled);
    lockSaveButton.disabled = true;
    lockSaveButton.classList.add(this._inactiveButtonClass);
  }
  
  unlockButton = () => {
    const unlockSaveButton = this._formElement.querySelector(this._submitButtonSelector);
    console.log('второй- ', unlockSaveButton.disabled);
    unlockSaveButton.disabledSelector = false;
    unlockSaveButton.disabled = false;
    unlockSaveButton.classList.remove(this._inactiveButtonClass);
  }

}

export default FormValidator;