export default class Section {
  constructor({ renderer }) {
    this._renderer = renderer;
    this._container = document.querySelector('.elements');
  }

  addItem(item) {
    this._container.append(item);
  }

  prependItem(item) {
    this._container.prepend(item);
  }

  renderItems(items, data) {
    items.forEach(item => {
      this._renderer(item, data);
    });
  }
}