export class ServiceProduct {

  static allProducts = [];

  getProducts() {
    return fetch('./data/goods.json')
      .then(data => data.json())
      .then(data => {
        if (localStorage.getItem.products) {
          this.allProducts = JSON.parse(localStorage.getItem('products'));
        } else {
          localStorage.setItem('products', JSON.stringify(data));
          this.allProducts = data;
        }

        return this.allProducts;
      })
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