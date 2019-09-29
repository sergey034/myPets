
import { ControllerProduct } from '../components/Product/ControllerProduct.js';
import { ControllerCategory } from '../components/Category/ControllerCategory.js';
import { ServiceProduct } from '../components/ServiceProduct.js';

export class Router {
  constructor() {
    this.controllerProduct = new ControllerProduct(this);
    this.controllerCategory = new ControllerCategory(this);
    this.serviceProduct = new ServiceProduct(this);
  }
}

// const router = new Router();