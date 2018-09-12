const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const countries = new Countries();
  countries.getData();

  const selector = document.querySelector('#countries');
  const selectView = new SelectView(selector);
  selectView.bindEvents();
});
