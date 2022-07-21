import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitEditProfileForm) {
    super(popupSelector);
    this._handleSubmitEditProfileForm = handleSubmitEditProfileForm;
    this._popupForm = this._popupElement.querySelector('.popup__form');
    this._popupInput = this._popupElement.querySelectorAll('.popup__input');
    this._handleSubmitButton = this._popupElement.querySelector('.popup__button');
    this._handleSubmitButtonText = 'Сохранение...';
    this._inputValues = {};
  }

  _getInputValues = () => {
    this._popupInput.forEach(input => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  toggleButtonText() {
    [this._handleSubmitButton.textContent, this._handleSubmitButtonText] = [this._handleSubmitButtonText, this._handleSubmitButton.textContent]
  }

  setInputValues = (data) =>{
    this._popupInput.forEach(input => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitEditProfileForm(this._getInputValues());
      this.close();
    })
  }



  close = () => {
    super.close();
    this._popupForm.reset();
  }
}