import { ViewCategory } from './ViewCategory.js';
import { ModelCategory } from './ModelCategory.js';

export class ControllerCategory {
  constructor(router) {
    this.router = router;
    this.model = new ModelCategory(this);
    this.view = new ViewCategory(this);
  }

  runGetCategory(e) {
    this.model.getCategory(e);
  }

  sendProductsToRender(products) {
    this.view.render(products);
  }
}