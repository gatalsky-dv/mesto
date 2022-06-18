import {openPopup, popupWithImage, popupImage, popupText} from './index.js';

export class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    return document
    .getElementById(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
  }

  _openPreviewPopup() {
    popupImage.src = this._link;;
    popupImage.alt = this._name;
    popupText.textContent = `Фото ${this._name}`;
    openPopup(popupWithImage);
  }

  _deleteCard() {
    this._elementCard.remove();
    this._elementCard = null;
  }
  
  _clickHeart() {
    this._elementHeart.classList.toggle('element__heart_active');
  }

  _setEventListeners() {
    this._elementMaskgroup.addEventListener('click', () => this._openPreviewPopup());
    this._elementHeart.addEventListener('click', () => this._clickHeart());
    this._elementTrash.addEventListener('click', () => this._deleteCard());
  }

  createCard() {
    this._elementCard = this._getTemplate();
    console.log(this._elementCard);
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