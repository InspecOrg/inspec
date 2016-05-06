angular.module('inspec.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('SearchCtrl', function($scope) {})

.controller('AccountCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/modal-signup.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
})

.controller('AboutCtrl', function($scope) {})

.controller('ConveniosCtrl', function($scope, Convenios) {
  $scope.convenios = Convenios.all();
});
