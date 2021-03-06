const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');


const Countries = function() {
  this.info = [];
};

Countries.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (e) => {
    const selectedIndex = e.detail;
    PubSub.publish('Countries:Result-Display', this.info[selectedIndex]);
  })
};

Countries.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');

  request.get((data) => {
    this.info = data.map(country => {
      let rCountry = {};
      rCountry['name'] = country['name'];
      rCountry['region'] = country['region'];
      rCountry['flag'] = country['flag'];
      rCountry['languages'] = country['languages'];
      return rCountry;
    });
    console.log(this.info);
    PubSub.publish('Countries:countries-loaded', this.info);
  });
};

module.exports = Countries;
