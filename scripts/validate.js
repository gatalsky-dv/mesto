const config = {
  formSelector: 'popup__form',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

// Функция, которая добавляет класс с ошибкой
const showInputError = (config, errorMessage) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.add('popup__input_type_error');
  // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formSelector, inputSelector) => {
  // Находим элемент ошибки
  const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
  inputSelector.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  // Очистим ошибку
  errorElement.textContent = '';
};

// // Функция, которая проверяет валидность поля
const checkInputValidity = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formSelector, inputSelector, inputSelector.validationMessage);
  } else {
    // Если проходит, Исследователь океанаскроем
    hideInputError(formSelector, inputSelector);
  }
};

const setEventListeners = (formSelector) => {
  // Найдём все поля формы и сделаем из них массив
  const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));
  // Найдём в текущей форме кнопку отправки
  const submitButtonSelector = formSelector.querySelector('.popup__save');

  inputList.forEach((inputSelector) => {
    inputSelector.addEventListener('input', () => {
      checkInputValidity(formSelector, inputSelector);

      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, submitButtonSelector);
    });
  });
};

formSelector.addEventListener('submit', function (evt) {
  // Отменим стандартное поведение по сабмиту
  evt.preventDefault();
});

const enableValidation = (config) => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  // Переберём полученную коллекцию
  formList.forEach((form) => {
    formSelector.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(form, config);
  });
};


// Функция принимает массив полей

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputSelector) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

    return !inputSelector.validity.valid;
  })
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (inputList, submitButtonSelector, inactiveButtonClass) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    console.log(inactiveButtonClass);
    submitButtonSelector.classList.add(inactiveButtonClass);
    submitButtonSelector.setAttribute('disabled', 'true');
  } else {
    // иначе сделай кнопку активной
    submitButtonSelector.classList.remove(inactiveButtonClass);
    submitButtonSelector.removeAttribute('disabled', 'false');
  }
};


// Вызовем функцию
enableValidation(config);