export default class Card {
  constructor({ item, elementTemplate, openPopupWithImg, openPopupWithConfirmation, likedCard, userId, }) {
    this._name = item.name;
    this._link = item.link;
    this._cardSelector = elementTemplate;
    this._handleCardClick = openPopupWithImg;
    this._confirmation = openPopupWithConfirmation;
    this._likedCard = likedCard;
    this._userId = userId;
    this._id = item._id;
    this._likes = item.likes;
    this._owner = item.owner;
    this._ownerId = item.owner._id;
    this._elementTrashDisabled = 'element__trash_disabled';
  }

  _getTemplate() {
    return this._cardSelector
    .content
    .querySelector('.element')
    .cloneNode(true);
  }

  deleteCard() {
    this._elementCard.remove();
    this._elementCard = null;
  }
  
  _clickHeart() {
    this._elementHeart.classList.toggle('element__heart_active', this._liked);
    this._liked = !this._liked;
  }

  handleCardLike(item) {
    this._likes = item.likes;
    this._countLikes();
    this._clickHeart();
  }

  _setEventListeners() {
    this._elementMaskgroup.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
    this._elementHeart.addEventListener('click', () => this._likedCard(this, this._liked, this._id));
    this._elementTrash.addEventListener('click', () => {
      this._confirmation(this);
    });
  }

  _checkLikes() {
    this._liked = this._likes.some(data => data._id === this._userId);
  }

  _countLikes() {
    this._elementCounter.textContent = this._likes.length;
  }

  cardСreation() {
    this._elementCard = this._getTemplate();
    this._elementMaskgroup = this._elementCard.querySelector('.element__maskgroup');
    this._elementHeart = this._elementCard.querySelector('.element__heart');
    this._elementTrash = this._elementCard.querySelector('.element__trash');
    this._elementName = this._elementCard.querySelector('.element__name');
    this._elementCounter = this._elementCard.querySelector('.element__counter');

    this._setEventListeners();
    this._elementName.textContent = this._name;
    this._elementMaskgroup.src = this._link;
    this._elementMaskgroup.alt = `Фото ${this._name}`;

    this._countLikes();
    this._checkLikes();
    this._clickHeart();

    if (!(this._userId === this._ownerId)) {
      this._elementTrash.classList.add(this._elementTrashDisabled);
    }

    return this._elementCard;
  }

  getCardId() {
    return this._id;
  }
}