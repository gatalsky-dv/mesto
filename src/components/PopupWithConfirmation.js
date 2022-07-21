import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, deleteCard) {
    super(popupSelector);
    this._deleteCard = deleteCard;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._deleteCard(this._currentCard);
      this.close();
    })
  }

  setCurrentCard(currentCard) {
  this._currentCard = currentCard;
  }
}