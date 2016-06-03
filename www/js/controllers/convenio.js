angular.module('inspec.controllers')

.controller('ConveniosCtrl', function($scope, Convenios) {
  $scope.convenios = Convenios.all();
})
