export class FormValidator {
  constructor(configValidator, formElement) {
    this._inputSelector = configValidator.inputSelector;
    this._submitButtonSelector = configValidator.submitButtonSelector;
    this._inactiveButtonClass = configValidator.inactiveButtonClass;
    this._inputErrorClass = configValidator.inputErrorClass;
    this._errorClass = configValidator.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  }

  _showInputError(inputElement, errorMessage) {
    console.log('добавляем формЭлемент - ', this._formElement);
    // console.log('добавляем раз', this._formElement.querySelector(`.${inputElement.id}-error`));
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    // console.log('добавляем три', this._errorClass);
    errorElement.classList.add(this._errorClass);
    // console.log('добавляем четыре', this._inputErrorClass);
    inputElement.classList.add(this._inputErrorClass);
  }
  
  _hideInputError(inputElement) {
    console.log('формЭлемент - ', this._formElement);
    // console.log('удаляем раз', this._formElement.querySelector(`.${inputElement.id}-error`));
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = '';
    // console.log('удаляем три', this._errorClass);
    errorElement.classList.remove(this._errorClass);
    // console.log('удаляем четыре', this._inputErrorClass);
    inputElement.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      const errorMessage = inputElement.validationMessage;
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    this._hasInvalidInput() ? this.lockButton() : this.unlockButton();
  }

  enableValidation() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  lockButton() {
    this._lockSaveButton = this._formElement.querySelector(this._submitButtonSelector);
    this._lockSaveButton.disabled = true;
    this._lockSaveButton.classList.add(this._inactiveButtonClass);
  }
  
  unlockButton() {
    this._unlockSaveButton = this._formElement.querySelector(this._submitButtonSelector);
    this._unlockSaveButton.disabledSelector = false;
    this._unlockSaveButton.disabled = false;
    this._unlockSaveButton.classList.remove(this._inactiveButtonClass);
  }

  // removeSelectors() {
  //   console.log('ну и хули?', this._inputElement);
  //   this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

  //   this._errorElement.textContent = '';
  //   this._errorElement.classList.remove(this._errorClass);
  //   this._inputElement.classList.remove(this._inputErrorClass);
  // }
  
  removeErrors() {
    // console.log('тут инпутЛист', this._inputList);
    // console.log('удаляем че-то', this._hideInputError);
    // console.log(inputElement);
    // this._hideInputError;
    this._inputList.forEach((inputElement) => {
      console.log('1');
      this._hideInputError(inputElement);
    });
  }



  // const removeErrors = (formElement) => { //тут поправить!!
//   const inputArray = Array.from(formElement.querySelectorAll('.popup__input'));
//   inputArray.forEach(removeSelectors);
// }

// const removeSelectors = (inputElement) => { //тут поправить!!
//   inputElement.classList.remove('popup__input_type_error');
//   const errorElement = document.querySelector(`.${inputElement.id}-error`);
//   errorElement.textContent = '';
//   errorElement.classList.remove('popup__input_error_visible');
// }

}

export default FormValidator;