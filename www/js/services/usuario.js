angular.module('inspec.services')

.factory('Usuarios', function(Restangular) {
  serviceUsuarios = Restangular.service('usuarios')

  return {
    new: function(data) {
      console.log(data);
      serviceUsuarios.post({data});
    }
  };
});
