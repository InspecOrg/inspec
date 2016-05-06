angular.module('inspec.services', [])

.factory('Convenios', function(Restangular) {
  return {
    all: function() {
      return Restangular.all('convenios').getList().$object;
    }
  };
})
