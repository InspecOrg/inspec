angular.module('inspec.services', [])

.factory('Usuarios', function(Restangular) {
  serviceUsuarios = Restangular.service('usuarios')

  return {
    new: function(data) {
      console.log(data);
      serviceUsuarios.post({data});
    }
  };
})

.factory('Convenios', function(Restangular) {
  serviceConvenios = Restangular.service('convenios')

  return {
    all: function() {
      return serviceConvenios.getList().$object;
    },
    show: function(id) {
      return serviceConvenios.one(id);
    }
  };
});
