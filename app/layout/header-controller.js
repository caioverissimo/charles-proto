angular
  .module('charlesProto')
  .controller('HeaderController', HeaderController);

// HeaderController.$inject = ['$location'];

function HeaderController() {
  var vm = this;

  vm.menuOpened = false;

}