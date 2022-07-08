export default class Card {
  constructor({item}, cardSelector, handleCardClick) {
    console.dir(item);
    console.log(item.name);
    console.log(item.link);
    this._name = item.name;
    this._link = item.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return this._cardSelector.cloneNode(true);
  }

  _deleteCard() {
    this._elementCard.remove();
    this._elementCard = null;
  }
  
  _clickHeart() {
    this._elementHeart.classList.toggle('element__heart_active');
  }

  _setEventListeners() {
    this._elementMaskgroup.addEventListener('click', () => {
      this._handleCardClick.open(this._name, this._link);
    });
    this._elementHeart.addEventListener('click', () => this._clickHeart());
    this._elementTrash.addEventListener('click', () => this._deleteCard());
  }

  createCard() {
    this._elementCard = this._getTemplate();
    this._elementMaskgroup = this._elementCard.querySelector('.element__maskgroup');
    this._elementHeart = this._elementCard.querySelector('.element__heart');
    this._elementTrash = this._elementCard.querySelector('.element__trash');
    this._elementName = this._elementCard.querySelector('.element__name');
    this._setEventListeners();
    this._elementName.textContent = this._name;
    this._elementMaskgroup.src = this._link;
    this._elementMaskgroup.alt = `Фото ${this._name}`;
    return this._elementCard;
  }
}