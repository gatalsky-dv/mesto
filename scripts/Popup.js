export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(this._popupSelector);
  }

  _handleEscClose = (evt) => {
    if(evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose = (evt) => {
    if(evt.target === evt.currentTarget) {
      this.close();
    }
  }

  setEventListeners = () => {
    const popupCloseButton = this._popupElement.querySelector('.popup__close');
    popupCloseButton.addEventListener('click', () => this.close());
    this._popupElement.addEventListener('mousedown', this._handleOverlayClose);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
}