angular.module('app', [
    'ngRoute', 
    'services.random-user']);

angular.module('app').constant('API-SERVER', {
  user: 'localhost:8000'
});

angular.module('app').config(function($routeProvider) {
  $routeProvider.when('/mypartial/:id',
    {templateUrl: 'yes/my-partial.html'});
    /* Add New Routes Above */
  $routeProvider.otherwise({redirectTo:'home'});
});


