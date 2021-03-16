export default class CartItem {
  constructor(item, id) {
    this.item = item;
    this.id = id;
  }

  render() {
    const { title, price, weight, imgname, imgalt, type, quantity, id } = this.item;
    return `<li class="cart-item" data-id="${id}" data-type="${type}">
        <img class="cart-item-img" src="https://dmitriizozulin.github.io/burgers/assets/images/${imgname}" alt="${imgalt}" />
        <div class="cart-item-data">
          <h2 class="cart-item-title">${title}</h2>
          <p class="cart-item-info">${price} - ${weight}</p>
          <p class="cart-item-info">Quantity: ${quantity}</p>
          <button class="cart-item-button" data-action="increment">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 226 226"
              style="fill: #000000"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <path d="M0,226v-226h226v226z" fill="none"></path>
                <g fill="#000000">
                  <path
                    d="M112.7793,22.39401c-8.31529,0.12186 -14.95971,6.95725 -14.84596,15.27266v60.26667h-60.26667c-5.43358,-0.07684 -10.48763,2.77792 -13.22684,7.47115c-2.73922,4.69323 -2.73922,10.4978 0,15.19103c2.73922,4.69323 7.79326,7.548 13.22684,7.47115h60.26667v60.26667c-0.07684,5.43358 2.77792,10.48763 7.47115,13.22684c4.69323,2.73922 10.4978,2.73922 15.19103,0c4.69323,-2.73922 7.548,-7.79326 7.47115,-13.22684v-60.26667h60.26667c5.43358,0.07684 10.48763,-2.77792 13.22684,-7.47115c2.73922,-4.69323 2.73922,-10.4978 0,-15.19103c-2.73922,-4.69323 -7.79326,-7.548 -13.22684,-7.47115h-60.26667v-60.26667c0.05567,-4.06993 -1.53756,-7.98927 -4.41709,-10.86603c-2.87953,-2.87676 -6.80041,-4.46621 -10.87028,-4.40662z"
                  ></path>
                </g>
              </g>
            </svg></button
          ><button class="cart-item-button" data-action="decrement">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 172 172"
              style="fill: #000000"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#000000">
                  <path
                    d="M28.66667,74.53333c-4.13529,-0.05848 -7.98173,2.11417 -10.06645,5.68601c-2.08471,3.57184 -2.08471,7.98948 0,11.56132c2.08471,3.57184 5.93115,5.74449 10.06645,5.68601h114.66667c4.13529,0.05848 7.98173,-2.11417 10.06645,-5.68601c2.08471,-3.57184 2.08471,-7.98948 0,-11.56132c-2.08471,-3.57184 -5.93115,-5.74449 -10.06645,-5.68601z"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </li>
    `;
  }
}
