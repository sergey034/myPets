import { ViewProduct } from './ViewProduct.js';
import { ModelProduct } from './ModelProduct.js';

export class ControllerProduct {
  constructor(router) {
    this.router = router;
    this.model = new ModelProduct(this);
    this.view = new ViewProduct(this);

    document.addEventListener('DOMContentLoaded', this.model.getProducts.bind(this));
  }

  sendProductsToRender(products) {
    this.view.render(products);
  }
}