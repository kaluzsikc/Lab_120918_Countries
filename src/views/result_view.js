const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:Result-Display', (e) => {
    this.container.innerHTML = '';
    this.HTMLRender('h1', e.detail.name, null);
    this.HTMLRender('img', '', e.detail.flag);
    this.HTMLRender('h2', 'Region: ', null);
    this.HTMLRender('h3', e.detail.region, null);
    this.HTMLRender('h2', 'Languages: ', null);
    this.HTMLRender('ul', null, null);
    for (language of e.detail.languages) {
      this.HTMLRender('li', language.name, null, this.container.lastChildElement);
    }
  })
};

ResultView.prototype.HTMLRender = function(tag, element_name, img, parent=this.container) {
  const item = document.createElement(tag);
  item.textContent = element_name;
  if (img) {
    item.src = img;
    item.width = "300";
    item.height = "200";
  }
  this.container.appendChild(item);
};

// function HTMLRender(tag, element_name) {
//   // this.container = document.querySelector('#country');
//   const item = document.createElement(tag);
//   item.textContent = element_name;
//   // console.log(item);
//   console.log(this);
//   // this.container.appendChild(item);
// };


module.exports = ResultView;
