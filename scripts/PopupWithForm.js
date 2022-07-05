import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitProfileForm) {
    super(popupSelector);
    this._handleSubmitProfileForm = handleSubmitProfileForm;
    this._popupForm = this._popupElement.querySelector('.popup__form');
    this._popupInput = this._popupElement.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    const values = {};
    this._popupInput.forEach(input => {
      values[input.name] = input.value;
    });
    return values;
  }

  _setInputValues(data) {
    this._popupInput.forEach(input => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitProfileForm(this._getInputValues());
      this.close();
    })
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}