import Templater from '../../src/Templater.js';

export class ViewProduct {
  constructor(contr) {
    this.controller = contr;
    this.templater = new Templater('./components/Product/Product.html');
    this.output = document.querySelector('#products');
  }

  render(products) {
    this.output.innerHTML = '';

    products.forEach(product => {
      this.templater.load(product, this.output);
    });
  }
}
