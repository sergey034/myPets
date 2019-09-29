export class ModelCategory {
  constructor(contr) {
    this.controller = contr;
  }

  getCategory(e) {
    const category = e.target.parentNode.id;
    let data = this.controller.router.serviceProduct.allProducts;

    if (category === 'all') {
      this.controller.sendProductsToRender(data);
    } else {

      let dataFiltered = data.filter(el => el.type === category);

      this.controller.sendProductsToRender(dataFiltered);
    }
  }
}