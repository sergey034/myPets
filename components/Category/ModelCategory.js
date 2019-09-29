export class ModelCategory {
  constructor(contr) {
    this.controller = contr;
  }

  getCategory(e) {
    const category = e.target.parentNode.id;

    if (category === 'all') {
      console.log('all');
      // run ControllerProduct.this.model.getProducts(); via router
    } else {
      console.log(category);
      // run ControllerProduct.this.model.getProducts(category); via router
    }
  }
}