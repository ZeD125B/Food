export default function getCards() {
  class Cards {
    constructor(src, alt, subtitle, descr, price, parent, ...classes) {
      this.src = src;
      this.alt = alt;
      this.subtitle = subtitle;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parent);
      this.classes = classes;
    }

    render() {
      const element = document.createElement('div');

      if (this.classes.includes('menu__item') === false || this.classes.length === 0) {
        this.classes = 'menu__item';
        element.classList.add(this.classes);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
        <img src="${this.src}" alt="${this.alt}">
          <h3 class="menu__item-subtitle">"${this.subtitle}"</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
        </div>
            `;
      this.parent.append(element);
    }
  }

  // eslint-disable-next-line no-undef
  axios.get('http://localhost:3000/menu')
    .then((data) => {
      data.data.forEach(({
        img, altImg, title, descr, price,
      }) => {
        new Cards(img, altImg, title, descr, price, '.menu .container').render();
      });
    });
}
