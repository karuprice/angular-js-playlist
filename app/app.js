var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'ninjaController'
    }).otherwise({
      redirectTo: '/home'
    })
}]);

myNinjaApp.controller('ninjaController', ['$scope', function($scope) {

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

  $scope.ninjas = [
    {
      name: 'Karl',
      belt: 'Black',
      rate: 50000,
      availiable: true,
      thumb: "content/img/baby.png"
    },
    {
      name: 'Kayo',
      belt: 'Red',
      rate: 4500,
      availiable: true,
      thumb: "content/img/baby.png"
    },
    {
      name: 'Liam',
      belt: 'Blue',
      rate: 3000,
      availiable: true,
      thumb: "content/img/baby.png"
    },
    {
      name: 'Evan',
      belt: 'Yellow',
      rate: 2000,
      availiable: true,
      thumb: "content/img/baby.png"
    },
  ]

}]);
