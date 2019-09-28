export default class Templater {
  constructor(link) {
    fetch(link)
      .then(l => l
        .text())
      .then(t => {
        this.template = t;
      });
  }
  load(objProd, domElem) {
    let htmlData = this.template;
    for (let key in objProd) {
      htmlData = htmlData.replace(`{{${key}}}`, objProd[key]);
    }
    domElem.innerHTML += htmlData;
  }
}