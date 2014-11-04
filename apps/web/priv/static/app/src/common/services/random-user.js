angular.module('services.random-user', []).factory('random-user', [function() {

  return {
    getUser: getUser
  };

  function getUser() {
    return $http.get("localhost:8000/random-user");
  }

}]);
