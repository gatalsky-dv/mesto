export default class Api {
  constructor(options) {
    this._baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-45/cards', {
      headers: {
        authorization: 'e639a24d-299a-4e69-8f0f-4d8273c25116'
    }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  api.getInitialCards()
  .then((result) => {
    // обрабатываем результат
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
  
}


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-45',
  headers: {
    authorization: 'e639a24d-299a-4e69-8f0f-4d8273c25116',
    'Content-Type': 'application/json'
  }
});







fetch('https://mesto.nomoreparties.co/v1/cohort-45/cards', {
  headers: {
    authorization: 'e639a24d-299a-4e69-8f0f-4d8273c25116'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });

  // GET https://nomoreparties.co/v1/cohort-45/users/me