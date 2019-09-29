export class ModelProduct {
  getProducts() {
    this.router.serviceProduct.getProducts()
      .then(data => this.sendProductsToRender(data));
  }
}