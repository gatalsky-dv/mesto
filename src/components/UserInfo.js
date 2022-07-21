export default class UserInfo {
  constructor (titleSelector, descriptionSelector, avatarSelector) {
    this._titleSelector = titleSelector;
    this._descriptionSelector = descriptionSelector;
    this._avatarSelector = avatarSelector;
    this._titleElement = document.querySelector(this._titleSelector);
    this._descriptionElement = document.querySelector(this._descriptionSelector);
    this._avatarElement = document.querySelector(this._avatarSelector);
    this._profileData = {};
  }

  getUserInfo = () => {
    this._profileData['user'] = this._titleElement.textContent;
    this._profileData['job'] = this._descriptionElement.textContent;
    return this._profileData;
  }

  setUserInfo = ({ name, about, avatar, _id }) => {
    this._titleElement.textContent = name;
    this._descriptionElement.textContent = about;
    this._avatarElement.src = avatar;
    this._userId = _id;
  }

  getUserId = () => {
    return this._userId;
  }

  editAvatar = (link) => {
    this._avatarElement.src = link;
  }
}