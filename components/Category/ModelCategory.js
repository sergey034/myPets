export class ModelCategory {
  constructor(contr) {
    this.controller = contr;
  }

  getCategory(e) {
    const category = e.target.parentNode.id;

    this.controller.router.serviceProduct.getProducts()
      .then(data => {
        if (category === 'all') {
          this.controller.sendProductsToRender(data);
        } else {
          this.controller.sendProductsToRender(data.filter(el => el.type === category));
        }
      });
  }
}