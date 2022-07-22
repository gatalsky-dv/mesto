(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var n,r;return n=t,(r=[{key:"_сheckResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._сheckResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._сheckResponseData(t)}))}},{key:"editProfile",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._сheckResponseData(e)}))}},{key:"addNewCard",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return n._сheckResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._сheckResponseData(e)}))}},{key:"showLikesCard",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:t,headers:this._headers}).then((function(e){return n._сheckResponseData(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._сheckResponseData(e)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){var n=t.item,r=t.elementTemplate,o=t.openPopupWithImg,i=t.openPopupWithConfirmation,a=t.likedCard,u=t.userId;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n.name,this._link=n.link,this._cardSelector=r,this._handleCardClick=o,this._confirmation=i,this._likedCard=a,this._userId=u,this._id=n._id,this._likes=n.likes,this._owner=n.owner,this._ownerId=n.owner._id,this._elementTrashDisabled="element__trash_disabled"}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return this._cardSelector.content.querySelector(".element").cloneNode(!0)}},{key:"deleteCard",value:function(){this._elementCard.remove(),this._elementCard=null}},{key:"_clickHeart",value:function(){this._elementHeart.classList.toggle("element__heart_active",this._liked),this._liked=!this._liked}},{key:"handleCardLike",value:function(e){this._likes=e.likes,this._countLikes(),this._clickHeart()}},{key:"_setEventListeners",value:function(){var e=this;this._elementMaskgroup.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._elementHeart.addEventListener("click",(function(){return e._likedCard(e,e._liked,e._id)})),this._elementTrash.addEventListener("click",(function(){e._confirmation(e)}))}},{key:"_checkLikes",value:function(){var e=this;this._liked=this._likes.some((function(t){return t._id===e._userId}))}},{key:"_countLikes",value:function(){this._elementCounter.textContent=this._likes.length}},{key:"cardСreation",value:function(){return this._elementCard=this._getTemplate(),this._elementMaskgroup=this._elementCard.querySelector(".element__maskgroup"),this._elementHeart=this._elementCard.querySelector(".element__heart"),this._elementTrash=this._elementCard.querySelector(".element__trash"),this._elementName=this._elementCard.querySelector(".element__name"),this._elementCounter=this._elementCard.querySelector(".element__counter"),this._setEventListeners(),this._elementName.textContent=this._name,this._elementMaskgroup.src=this._link,this._elementMaskgroup.alt="Фото ".concat(this._name),this._countLikes(),this._checkLikes(),this._clickHeart(),this._userId!==this._ownerId&&this._elementTrash.classList.add(this._elementTrashDisabled),this._elementCard}},{key:"getCardId",value:function(){return this._id}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));n.textContent=t,n.classList.add(this._errorClass),e.classList.add(this._inputErrorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));t.textContent="",t.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(e){if(e.validity.valid)this._hideInputError(e);else{var t=e.validationMessage;this._showInputError(e,t)}}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.lockButton():this.unlockButton()}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"lockButton",value:function(){this._lockSaveButton=this._formElement.querySelector(this._submitButtonSelector),this._lockSaveButton.disabled=!0,this._lockSaveButton.classList.add(this._inactiveButtonClass)}},{key:"unlockButton",value:function(){this._unlockSaveButton=this._formElement.querySelector(this._submitButtonSelector),this._unlockSaveButton.disabledSelector=!1,this._unlockSaveButton.disabled=!1,this._unlockSaveButton.classList.remove(this._inactiveButtonClass)}},{key:"removeErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(".elements")}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e,t){var n=this;e.forEach((function(e){n._renderer(e,t)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),l(this,"_handleOverlayClose",(function(e){e.target===e.currentTarget&&n.close()})),this._popupSelector=t,this._popupElement=document.querySelector(this._popupSelector),this._popupCloseButton=this._popupElement.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"setEventListeners",value:function(){var e=this;this._popupCloseButton.addEventListener("click",(function(){return e.close()})),this._popupElement.addEventListener("mousedown",this._handleOverlayClose)}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(n);if(r){var o=m(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return h(this,e)});function i(e){var t,n,r,a,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),u=function(e,r){n._imageElement.src=r,n._imageElement.alt=e,n._captionElement.textContent="Фото ".concat(e),_((t=d(n),m(i.prototype)),"open",t).call(t)},(a="open")in(r=d(n=o.call(this,e)))?Object.defineProperty(r,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):r.open=u,n._imageElement=document.querySelector(".popup__img"),n._captionElement=document.querySelector(".popup__text"),n}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(s);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function E(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),P(w(r=i.call(this,e)),"_getInputValues",(function(){return r._popupInput.forEach((function(e){r._inputValues[e.name]=e.value})),r._inputValues})),P(w(r),"setInputValues",(function(e){r._popupInput.forEach((function(t){t.value=e[t.name]}))})),P(w(r),"close",(function(){C((n=w(r),O(a.prototype)),"close",n).call(n),r._popupForm.reset()})),r._handleSubmitEditProfileForm=t,r._popupForm=r._popupElement.querySelector(".popup__form"),r._popupInput=r._popupElement.querySelectorAll(".popup__input"),r._handleSubmitButton=r._popupElement.querySelector(".popup__button"),r._handleSubmitButtonText="Сохранение...",r._inputValues={},r}return t=a,(n=[{key:"toggleButtonText",value:function(){var e=[this._handleSubmitButtonText,this._handleSubmitButton.textContent];this._handleSubmitButton.textContent=e[0],this._handleSubmitButtonText=e[1]}},{key:"setEventListeners",value:function(){var e=this;C(O(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitEditProfileForm(e._getInputValues())}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function x(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._deleteCard=t,n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;B(q(a.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._deleteCard(e._currentCard)}))}},{key:"setCurrentCard",value:function(e){this._currentCard=e}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t,n){return t&&U(e.prototype,t),n&&U(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=A((function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),V(this,"getUserInfo",(function(){return o._profileData.user=o._titleElement.textContent,o._profileData.job=o._descriptionElement.textContent,o._profileData})),V(this,"setUserInfo",(function(e){var t=e.name,n=e.about,r=e.avatar,i=e._id;o._titleElement.textContent=t,o._descriptionElement.textContent=n,o._avatarElement.src=r,o._userId=i})),V(this,"getUserId",(function(){return o._userId})),V(this,"editAvatar",(function(e){o._avatarElement.src=e})),this._titleSelector=t,this._descriptionSelector=n,this._avatarSelector=r,this._titleElement=document.querySelector(this._titleSelector),this._descriptionElement=document.querySelector(this._descriptionSelector),this._avatarElement=document.querySelector(this._avatarSelector),this._profileData={}})),N=document.querySelector(".profile__edit"),M=document.querySelector(".profile__add"),W=document.querySelector(".profile__avatar"),F=document.getElementById("element-template"),J=document.querySelector(".popup__form_user"),z=document.querySelector(".popup__form_card"),$=document.querySelector(".popup__form_avatar"),G={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_error_visible"};function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-45",headers:{authorization:"e639a24d-299a-4e69-8f0f-4d8273c25116","Content-Type":"application/json"}}),X={};Array.from(document.forms).forEach((function(e){X[e.name]=new i(G,e),X[e.name].enableValidation()}));var Y=function(e){return new r(e).cardСreation()},Z=function(e,t,n){t?Q.showLikesCard(n,"PUT").then((function(t){e.handleCardLike(t)})).catch((function(e){console.log(e)})):Q.showLikesCard(n,"DELETE").then((function(t){e.handleCardLike(t)})).catch((function(e){console.log(e)}))},ee=function(e,t){ne.open(e,t)},te=function(e){ie.setCurrentCard(e),ie.open()},ne=new v(".popup_image");ne.setEventListeners();var re=new j(".popup_user",(function(e){var t=e.user,n=e.job;re.toggleButtonText(),Q.editProfile(t,n).then((function(e){ue.setUserInfo(e),re.close()})).catch((function(e){console.log(e)})).finally((function(){re.toggleButtonText()}))}));re.setEventListeners();var oe=new j(".popup_card",(function(e){var t=e.name,n=e.link,r=ue.getUserId();oe.toggleButtonText(),Q.addNewCard(t,n).then((function(e){var t=Y({item:e,elementTemplate:F,openPopupWithImg:ee,openPopupWithConfirmation:te,likedCard:Z,userId:r});ce.prependItem(t),oe.close()})).catch((function(e){console.log(e)})).finally((function(){oe.toggleButtonText()}))}));oe.setEventListeners();var ie=new D(".popup_confirmation",(function(e){var t=e.getCardId();Q.deleteCard(t).then((function(t){e.deleteCard(),ie.close()})).catch((function(e){console.log(e)}))}));ie.setEventListeners();var ae=new j(".popup_avatar",(function(e){var t=e.avatar;ae.toggleButtonText(),Q.updateAvatar(t).then((function(e){ue.editAvatar(t),ae.close()})).catch((function(e){console.log(e)})).finally((function(){ae.toggleButtonText()}))}));ae.setEventListeners();var ue=new H(".profile__name",".profile__description",".profile__image"),ce=new u({renderer:function(e,t){var n=Y({item:e,elementTemplate:F,openPopupWithImg:ee,openPopupWithConfirmation:te,likedCard:Z,userId:t});ce.addItem(n)}});N.addEventListener("click",(function(){X[J.name].removeErrors(),X[J.name].unlockButton();var e=ue.getUserInfo();re.setInputValues(e),re.open()})),M.addEventListener("click",(function(){X[z.name].removeErrors(),X[z.name].lockButton(),oe.open()})),W.addEventListener("click",(function(){X[$.name].removeErrors(),X[$.name].lockButton(),ae.open()})),Promise.all([Q.getUserInfo(),Q.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=o.name,a=o.about,u=o.avatar,c=o._id,l=r[1];ue.setUserInfo({name:i,about:a,avatar:u,_id:c}),ce.renderItems(l,c)})).catch((function(e){console.log(e)}))})();
//# sourceMappingURL=main.js.map