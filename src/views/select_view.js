const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element) {
  this.element = element;
};
SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-loaded', (e) => {
    const countriesArray = e.detail.map(country => {
      return country['name'];
    });
    for (i = 0; i<countriesArray.length; i++) {
      this.element.appendChild(populate('option', i, countriesArray[i]));
    }
  })
  this.element.addEventListener('change', (e) => {
    const selectedIndex = e.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  })
};

function populate(element, index, name) {
    let option = document.createElement(element);
    option.textContent = name;
    option.value = index;
    return option;
}


module.exports = SelectView;
