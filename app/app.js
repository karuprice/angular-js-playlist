var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

myNinjaApp.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'ninjaController'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'ninjaController'
    }).otherwise({
      redirectTo: '/home'
    })
}]);

// directies need to return an obj
// restrict: 'E' ** can only be used as an Element, A is attribute
// ninjas: '=' ** binds on value to another/ ninjas from the element from <random-ninja></
myNinjaApp.directive('randomNinja', [function() {
  return {
    restrict: 'E',
    scope: {
      ninjas: '=',
      title:  '='
    },
    templateUrl: 'views/random.html',
    transclude: true,
    replace: true,
    controller: function($scope){
      $scope.random = Math.floor(Math.random() * 4);
    }
  };
}]);

myNinjaApp.controller('ninjaController', ['$scope', '$http', function($scope, $http) {

  $scope.message = 'Ninja time'

  $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);
  };

  $scope.addNinja = function(){
    $scope.ninjas.push({
      name: $scope.newNinja.name,
      belt: $scope.newNinja.belt,
      rate: parseInt($scope.newNinja.rate),
      availiable: true
    });
    $scope.newNinja.name = '',
    $scope.newNinja.belt = '',
    $scope.newNinja.rate = ''
  };

  $scope.removeAll = function(){
      $scope.ninjas = [];
    };

  $http.get('data/ninjas.json').then(function(response){
      $scope.ninjas = response.data});
}]);
