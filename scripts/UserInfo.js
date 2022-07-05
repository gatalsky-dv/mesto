export default class UserInfo {
  constructor (titleSelector, descriptionSelector) {
    this._titleSelector = titleSelector;
    this._descriptionSelector = descriptionSelector;
    this._titleElement = document.querySelector(this._titleSelector);
    this._descriptionElement = document.querySelector(this._descriptionSelector);
  }

  getUserInfo() {
    return {title: this._titleElement.textContent, description: this._descriptionElement.textContent};
  }

  setUserInfo(data) {
    this._titleElement.textContent = data?.title || '';
    this._descriptionElement.textContent = data?.description || '';
  }
}