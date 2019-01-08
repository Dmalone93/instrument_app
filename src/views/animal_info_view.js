const PubSub = require('../helpers/pub_sub.js')

const AnimalInfoView = function(){

}

AnimalInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Animals:animal-found', (event) => {
    this.render(event.detail)
  });
}

AnimalInfoView.prototype.render = function (animal) {
  const animalDiv = document.querySelector('#animal-info');
  const infoPara = document.createElement('p');
  infoPara.textContent = `The ${animal.species}, of class ${animal.class} has a max speed of ${animal.maxSpeed} km/h.`
  animalDiv.innerHTML = '';
  animalDiv.appendChild(infoPara);
};



module.exports = AnimalInfoView;
