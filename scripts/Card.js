import {openPopup, popupImage, popupImg, popupText} from './index.js';

export class Card {
  constructor(name, link, templateContent) {
    this._name = name;
    this._link = link;
    this._templateContent = templateContent;
  }

  _getTemplate() {
    return document.getElementById('element-template').content.querySelector('.element').cloneNode(true);
  }

  _openPreviewPopup() {
    popupImg.src = this._link;;
    popupImg.alt = this._name;
    popupText.textContent = `Фото ${this._name}`;
    openPopup(popupImage);
  }

  _deleteCard() {
    this._elementCard.remove();
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