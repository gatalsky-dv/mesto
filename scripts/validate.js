// Вынесем все необходимые элементы формы в константы
const formSelector = document.querySelector('.popup__edit');
const inputSelector = formSelector.querySelector('.popup__input');
const inactiveButtonClass = formSelector.querySelector('popup__save_disabled');

// Функция, которая добавляет класс с ошибкой
const showInputError = (formSelector, inputSelector, errorMessage) => {
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
const isValid = (formSelector, inputSelector) => {
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
      isValid(formSelector, inputSelector);

      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, submitButtonSelector);
    });
  });
};

formSelector.addEventListener('submit', function (evt) {
  // Отменим стандартное поведение по сабмиту
  evt.preventDefault();
  evt.target.reset();
  keyHandler();
});

const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.popup__edit'));

  // Переберём полученную коллекцию
  formList.forEach((formSelector) => {
    formSelector.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
      evt.target.reset();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formSelector);
  });
};

// Вызовем функцию
enableValidation();

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
    submitButtonSelector.classList.add(inactiveButtonClass);
    submitButtonSelector.setAttribute('disabled', 'true');
  } else {
    // иначе сделай кнопку активной
    submitButtonSelector.classList.remove(inactiveButtonClass);
    submitButtonSelector.removeAttribute('disabled', 'false');
  }
};