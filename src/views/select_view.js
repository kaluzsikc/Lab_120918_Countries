const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element) {
  this.element = element;
};
SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-loaded', (e) => {
    const countriesArray = e.detail.map(country => {
      return country['name'];
    });
    console.log(countriesArray);
    for (i = 0; i<countriesArray.length; i++) {
      this.element.appendChild(populate('option', i, countriesArray[i]));
    }
  })
};

function populate(element, index, name) {
    let option = document.createElement(element);
    option.textContent = name;
    option.value = index;
    return option;
}


module.exports = SelectView;
