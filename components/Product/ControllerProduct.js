import { ViewProduct } from './ViewProduct.js';
import { ModelProduct } from './ModelProduct.js';

export class ControllerProduct {
  constructor() {
    this.model = new ModelProduct(this);
    this.view = new ViewProduct(this);

    document.addEventListener('DOMContentLoaded', this.model.getProducts());
  }

  // getProductsFromBase() {
  //   this.model.
  // }

  sendProductsToRender(products) {
    this.view.render(products);
  }
}