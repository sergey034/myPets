export class ModelProduct {
  constructor(contr) {
    this.controller = contr;
    this.productsArr = [];
  }

  loadToLocStor(products) {
    localStorage.setItem('products', JSON.stringify(products));
    // return localStorage.getItem('products');
  }

  getProducts(category = '') {
    fetch('./data/goods.json')
      .then(data => data.json())
      .then(data => {
        localStorage.setItem('products', JSON.stringify(data));
        this.productsArr = JSON.parse(localStorage.getItem('products'));

        if (category) {
          this.productsArr = this.productsArr.filter(prod => {
            if (prod.type === category) {
              return prod;
            }
          });
        }

        return this.productsArr;
      })
      .then(prodArr => this.controller.sendProductsToRender(prodArr));
  }

  // getProducts(src) {
  //   fetch(src)
  //     .then(data => data.json())
  // }

  // loadToLocStor(products) {
  //   localStorage.setItem('products', JSON.stringify(products));
  //   // return localStorage.getItem('products');
  // }

  // getProductsArrFromLocStor() {
  //   // returns products array
  //   return JSON.parse(localStorage.getItem('products'));
  // }

  // loadProducts() {
  //   return this.getProducts('../../data/shop.json')
  //     .then(data => this.loadToLocStor(data))
  //     .then(() => this.getProductsArrFromLocStor())
  //     .then(data => this.controller.sendProductsToRender(data));
  // }

}