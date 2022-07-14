import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = document.querySelector('.popup__img');
    this._captionElement = document.querySelector('.popup__text');
  }

  open() {
    super.open();
  }
}