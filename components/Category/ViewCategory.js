export class ViewCategory {
  constructor(contr) {
    this.conrtoller = contr;
    this.navbar = document.querySelector('#main-menu');
    this.navbar.addEventListener('click', (e) => this.controller.runGetCategory(e));
  }

  // run render method of ViewProduct with argument category
}