import MenuItem from './menuItem.js';
import Cart from './cart.js';

export default class Navigation {
  constructor(root) {
    this.menuUrl =
      'https://gist.githubusercontent.com/dmitriizozulin/fa2d4f13f3d94783bbe394d964988fdd/raw/61ee36b36935485c3d35fc8fd166749bca4c3ad3/burgers-menu.json';

    this.menuItems = [];
    this.rootElem = document.querySelector(root);

    this.store = new Map();
    this.cart = new Cart('.cart-list', '.cart-button');

    this._init();
  }

  async _init() {
    const title = document.querySelector('.title');
    title.addEventListener('click', () => this.loadData());

    this.menuItems = await this._get();
    this._render();
  }

  async _get(url = this.menuUrl) {
    if (this.store.has(url)) {
      return this.store.get(url);
    } else {
      const data = await fetch(url).then(d => d.json());
      this.store.set(url, data);
      return data;
    }
  }

  _render() {
    const data = this.menuItems.map((item, id) => new MenuItem(item, id).render());
    this.rootElem.innerHTML = data.join('');
    this._handleClick();
  }

  _handleClick() {
    const items = this.rootElem.querySelectorAll('.item');
    items.forEach(item => {
      item.addEventListener('click', e => {
        const link = e.currentTarget.dataset['link'];
        if (link !== 'undefined') {
          this.loadData(link);
        } else {
          const item = e.currentTarget.dataset;
          this.cart.add(item);
        }
      });
    });
  }

  async loadData(url) {
    this.menuItems = await this._get(url);
    this._render();
  }
}
