angular.module('inspec.controllers')

.controller('AccountCtrl', function($scope, $ionicModal, $ionicPopup, Usuarios) {
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

  $scope.showAlert = function(message) {
    var alertPopup = $ionicPopup.alert({
      title: 'Registro',
      template: message
    });
  };

  $scope.signUp = function(novoUsuario) {
    Usuarios.new(novoUsuario)
    .then(function(response) {
      $scope.closeModal();
      $scope.showAlert("Usuário cadastrado com sucesso!");
    }, function(response) {
      console.log(response);

      $scope.showAlert("Erro ao cadastrar usuário.");
    });


  };

  $scope.signIn = function(usuario) {
    console.log(usuario);
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
})
