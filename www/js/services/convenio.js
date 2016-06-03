angular.module('inspec.services')

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
