import { ControllerProduct } from '../components/Product/ControllerProduct.js';
import { ControllerCategory } from '../components/Category/ControllerCategory.js';

const product = new ControllerProduct();
const category = new ControllerCategory();



// Show pets category
document.querySelector('#main-menu').addEventListener('click', getCategory);

function getCategory(e) {
  const category = e.target.parentNode.id;

  if (category === 'all') {
    console.log('Show all pets');
  } else {
    console.log(category);
  }
}