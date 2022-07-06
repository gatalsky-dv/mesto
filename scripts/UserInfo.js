export default class UserInfo {
  constructor (titleSelector, descriptionSelector) {
    this._titleSelector = titleSelector;
    this._descriptionSelector = descriptionSelector;
    this._titleElement = document.querySelector(this._titleSelector);
    console.dir(this._titleElement);
    this._descriptionElement = document.querySelector(this._descriptionSelector);

    console.dir(this._descriptionElement);
  }

  getUserInfo = () => {
    return {user: this._titleElement.textContent, job: this._descriptionElement.textContent};
  }

  setUserInfo = (data) => {
    console.dir(data);
    console.log('data.user', data.user);
    this._titleElement.textContent = [data.user];
    console.log("this._titleElement.textContent: ", this._titleElement.textContent);
    this._descriptionElement.textContent = data.job;
    console.log("this._descriptionElement.textContent: ", this._descriptionElement.textContent);
    debugger;
  }
}