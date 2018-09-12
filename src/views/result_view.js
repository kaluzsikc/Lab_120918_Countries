const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container) {
  this.container = container;
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:Result-Display', (e) => {
    this.HTMLRender('h1', e.detail.name);
    this.HTMLRender('h2', e.detail.region);
    this.HTMLRender('img', '', e.detail.flag);

  })
};

ResultView.prototype.HTMLRender = function(tag, element_name, img) {
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
