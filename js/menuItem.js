export default class MenuItem {
  constructor(item, id) {
    this.item = item;
    this.id = id;
  }

  render() {
    const item = this.item;

    return `
      <li class="item" data-id="${this.id}" data-link="${item['link']}" data-title="${item['title']}" data-imgName="${
      item['img-name']
    }" data-imgAlt="${item['img-alt']}" data-price="${item['price']}" data-weight="${item['weight']}" data-type="${
      item['type']
    }">
        <img class="item-img" src="/assets/images/${item['img-name']}" alt="${item['img-alt']}" />
        <div class="item-data">
          <h2 class="item-title">${item['title']}</h2>
          ${
            item['price']
              ? `<p class="item-price">${item['price']}${item['weight'] ? ' - ' + item['weight'] : ''}</p>`
              : ''
          }
        </div>
      </li>
    `;
  }
}
