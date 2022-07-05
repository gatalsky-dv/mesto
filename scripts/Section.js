export default class Section {
  constructor(items, renderer, containerSelector) {
    console.log("renderer: ", renderer);
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  addItem(item) {
    this._containerSelector.prepend(this._renderer(item));
  }

  renderItems() {
    console.log(this);
    this._items.forEach(item => {
      this.addItem(item);
    });
  }
}