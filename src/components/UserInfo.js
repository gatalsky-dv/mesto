export default class UserInfo {
  constructor (titleSelector, descriptionSelector) {
    this._titleSelector = titleSelector;
    this._descriptionSelector = descriptionSelector;
    this._titleElement = document.querySelector(this._titleSelector);
    this._descriptionElement = document.querySelector(this._descriptionSelector);
    this._profileData = {};
  }

  getUserInfo = () => {
    this._profileData['user'] = this._titleElement.textContent;
    this._profileData['job'] = this._descriptionElement.textContent;
    return this._profileData;
  }

  setUserInfo = (data) => {
    this._titleElement.textContent = data['user'];
    this._descriptionElement.textContent = data['job'];
  }
}