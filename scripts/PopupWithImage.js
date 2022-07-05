import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = document.querySelector('.popup__img');
    this._captionElement = document.querySelector('.popup__text');
  }

  open = (name, link) => {
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._captionElement.textContent = `Фото ${name}`;
    super.open();
  }
}