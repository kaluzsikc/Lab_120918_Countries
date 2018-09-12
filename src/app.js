const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const countries = new Countries();
  countries.getData();
  countries.bindEvents();

  const selector = document.querySelector('#countries');
  const selectView = new SelectView(selector);
  selectView.bindEvents();

  const resultDisplay = document.querySelector('#country');
  const resultView = new ResultView(resultDisplay);
  resultView.bindEvents();
});
