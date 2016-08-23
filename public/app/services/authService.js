angular.module('app')
  .service('loginService', loginService);

  function loginService($http, $rootScope) {
    this.authUser = (user) => {
      return $http({
        method: 'GET',
        url: `/api/auth/:$(user)`
      });
    };
  }
