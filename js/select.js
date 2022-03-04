const element = document.querySelector('select');
const choices = new Choices(element, {

  delimiter: ',',
  searchEnabled: false,
  searchFloor: 1,
  searchResultLimit: 4,
  position: 'auto',
  placeholder: true,
  renderSelectedChoices: 'auto',
  itemSelectText: '',

});



