// Configuration blocks - get executed during the provider registrations and configuration phase. 
// Only providers and constants can be injected into configuration blocks. This is to prevent 
// accidental instantiation of services before they have been fully configured.
angular.module('donors-test', ['security.authorization'])

.config(['$routeProvider', 'securityAuthorizationProvider', function($routeProvider, securityAuthorizationProvider) {
  $routeProvider.when('/donors-test', {
    templateUrl:'donors/donors-test.tpl.html',
    controller: 'DonorsViewCtrl',
    resolve: {
      donors: 'Donors', function(Donors) {
                return Donors.all();
      },
    authenticatedUser: securityAuthorizationProvider.requireAuthenticatedUser
    }
  });
}])

.controller('DonorsViewCtrl', ['$scope', '$location', 'security', function($scope, $location, security){
  //$scope.donors = donors;

}]);


