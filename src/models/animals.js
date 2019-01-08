const PubSub = require('../helpers/pub_sub.js');

const Animals = function(){
  this.animals = [
    {species: 'Peregrine Falcon', maxSpeed: 389, class: 'Flight'},
    {species: 'Golden Eagle', maxSpeed: 320, class: 'Flight'},
    {species: 'White-throated Needletail Swift', maxSpeed: 169, class: 'Flight'},
    {species: 'Eurasian Hobby', maxSpeed: 160, class: 'Flight'},
    {species: 'Frigatebird', maxSpeed: 153, class: 'Flight'},
    {species: 'Rock Dove (Pigeon)', maxSpeed: 149, class: 'Flight'},
    {species: 'Spur-winged Goose', maxSpeed: 140, class: 'Flight'},
    {species: 'Black Marlin', maxSpeed: 129, class: 'Swimming'},
    {species: 'Gyrfalcon', maxSpeed: 128, class: 'Flight'},
    {species: 'Grey-headed Albatross', maxSpeed: 129, class: 'Flight'}
  ];
};

Animals.prototype.bindEvents = function(){
  PubSub.publish('Animals:all-animals-ready', this.animals);
  console.log('Published on all-animals-ready');

  //PubSub.subscribe(controller, callback)
  PubSub.subscribe('SelectView:animal-selected', (event) => {
    const index = event.detail;
    const foundAnimal = this.findAnimal(index)
    PubSub.publish('Animals:animal-found', foundAnimal)
  });
}

Animals.prototype.findAnimal = function(index){
  return this.animals[index]
}

module.exports = Animals;

//similar data to datastructure of API's(application programming interface)
