import CartItem from './cartItem.js';

export default class Cart {
  constructor(root, button) {
    this.rootElem = document.querySelector(root);
    this.buttonElem = document.querySelector(button);

    this.cartItems = new Object();

    this._init();
  }

  _init() {
    this.buttonElem.addEventListener('click', () => {
      this.rootElem.classList.toggle('visible');
      this.buttonElem.classList.toggle('invisible');
    });
    this._render();
  }

  _render() {
    this.rootElem.innerHTML = `
      <h1>Cart</h1>
      <button class="cart-close">
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="100" height="100"
          viewBox="0 0 172 172"
          style=" fill:#000000;"
        >
          <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#000000"><path d="M40.13333,22.93333c-1.46702,0 -2.93565,0.55882 -4.05365,1.67969l-11.46667,11.46667c-2.24173,2.24173 -2.24173,5.87129 0,8.10729l41.81302,41.81302l-41.81302,41.81302c-2.24173,2.24173 -2.24173,5.87129 0,8.10729l11.46667,11.46667c2.24173,2.24173 5.87129,2.24173 8.10729,0l41.81302,-41.81302l41.81302,41.81302c2.236,2.24173 5.87129,2.24173 8.10729,0l11.46667,-11.46667c2.24173,-2.24173 2.24173,-5.87129 0,-8.10729l-41.81302,-41.81302l41.81302,-41.81302c2.24173,-2.236 2.24173,-5.87129 0,-8.10729l-11.46667,-11.46667c-2.24173,-2.24173 -5.87129,-2.24173 -8.10729,0l-41.81302,41.81302l-41.81302,-41.81302c-1.12087,-1.12087 -2.58663,-1.67969 -4.05365,-1.67969z"></path></g></g>
        </svg>
      </button>
    `;

    Object.values(this.cartItems).forEach(item => (this.rootElem.innerHTML += new CartItem(item).render()));

    let sum = 0;
    for (let item in this.cartItems) {
      sum += parseFloat(this.cartItems[item].price) * parseInt(this.cartItems[item].quantity);
    }

    this.rootElem.innerHTML += `
      <h3>Sum: ${String(sum).slice(0, 5)}$</h3>
    `;
    this._handleActions();
  }

  _handleActions() {
    this.rootElem.querySelector('.cart-close').addEventListener('click', () => {
      this.rootElem.classList.toggle('visible');
      this.buttonElem.classList.toggle('invisible');
    });

    const cartItems = this.rootElem.querySelectorAll('.cart-item');
    cartItems.forEach(item => {
      item.addEventListener('click', e => {
        const { id, type } = e.currentTarget.dataset;
        const curItem = this.cartItems[id + type];
        const target = e.target.closest('.cart-item-button');
        if (target.dataset.action === 'increment') {
          curItem.quantity += 1;
        } else if (target.dataset.action === 'decrement') {
          if (curItem.quantity === 1) {
            delete this.cartItems[id + type];
          } else {
            curItem.quantity -= 1;
          }
        }
        this._render();
      });
    });
  }

  add(item) {
    if (this.cartItems[item.id + item.type]) {
      this.cartItems[item.id + item.type].quantity += 1;
    } else {
      Object.assign(this.cartItems, { [item.id + item.type]: { ...item } });
      this.cartItems[item.id + item.type].quantity = 1;
    }
    this._render();
  }
}
