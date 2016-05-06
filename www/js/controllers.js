angular.module('inspec.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('SearchCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
})

.controller('AboutCtrl', function($scope) {})

.controller('ConveniosCtrl', function($scope, Convenios) {
  $scope.convenios = Convenios.all();
});
