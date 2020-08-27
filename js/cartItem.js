export default class CartItem {
  constructor(item, id) {
    this.item = item;
    this.id = id;
  }

  render() {
    const { title, price, weight, imgname, imgalt, type, quantity } = this.item;
    const id = this.id;
    return `
      <li class="cart-item" data-id="${id}" data-type="${type}">
        <img class="cart-item-img" src="assets/images/${imgname}" alt="${imgalt}" />
        <div class="cart-item-data">
          <h2 class="cart-item-title">${title}</h2>
          <p class="cart-item-info" >${price} - ${weight}</p>
          <p class="cart-item-info" >Quantity: ${quantity}</p>
          <button>+</button><button>-</button>
        </div>
      </li>
    `;
  }
}
