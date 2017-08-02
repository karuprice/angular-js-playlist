var myNinjaApp = angular.module('myNinjaApp', []);



myNinjaApp.controller('ninjaController', ['$scope', function($scope) {

  $scope.message = 'Ninja time'

  $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);
  }

  $scope.ninjas = [
    {
      name: 'Karl',
      belt: 'Black',
      rate: 50000,
      availiable: true
    },
    {
      name: 'Kayo',
      belt: 'Red',
      rate: 4500,
      availiable: true
    },
    {
      name: 'Liam',
      belt: 'Blue',
      rate: 3000,
      availiable: false
    },
    {
      name: 'Evan',
      belt: 'Yellow',
      rate: 2000,
      availiable: true
    },
  ]




}]);
