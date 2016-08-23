'use strict';

angular.module('app').service('loginService', loginService);

function loginService($http, $rootScope) {
  this.authUser = function (user) {
    return $http({
      method: 'GET',
      url: '/api/auth/:$(user)'
    });
  };
}