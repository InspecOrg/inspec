angular.module('inspec.services')

.factory('Usuarios', function(Restangular) {
  serviceUsuarios = Restangular.service('usuarios')

  return {
    new: function(data) {
      console.log(data);
      return serviceUsuarios.post({usuario: data});
    }
  };
});
