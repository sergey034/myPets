import { ViewCategory } from './ViewCategory.js';
import { ModelCategory } from './ModelCategory.js';

export class ControllerCategory {
  constructor(router) {
    this.router = router.controllerProduct.sendProductsToRender.bind(router.controllerProduct); // this?????
    this.model = new ModelCategory(this);
    this.view = new ViewCategory(this);
  }

  runGetCategory() {
    this.model.getCategory();
  }


}