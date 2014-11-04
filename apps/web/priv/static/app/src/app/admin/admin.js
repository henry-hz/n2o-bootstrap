angular.module('admin-users-edit', [
   'services.random-user' 
])

.controler('MainCtrl', ['services.random-user', function(RandomUserFactory) {
  var vm = this;
  vm.getRandomUser = getRandomUser;

  function getRandomUser() {
    RandomUserFactory.getUser().then(function sucess (response) {
      vm.randomUser = response.data;
    });

  }
}
