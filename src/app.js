const Animals = require('./models/animals.js');
const SelectView = require('./views/select_view.js');
const AnimalInfoView = require('./views/animal_info_view.js');

document.addEventListener('DOMContentLoaded', function(){
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#animals-dropdown');
  const selectView = new SelectView(selectElement)
  selectView.bindEvents();

  const animalInfoView = new AnimalInfoView();
  animalInfoView.bindEvents();

  const animals = new Animals()
  animals.bindEvents();


});
