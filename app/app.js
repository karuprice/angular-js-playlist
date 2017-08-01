var myNinjaApp = angular.module('myNinjaApp', []);



myNinjaApp.controller('ninjaController', ['$scope', function($scope) {

  $scope.message = 'Ninja time'

  $scope.ninjas = ['Karl', 'Kayo', 'Liam', 'Evan']

}]);
