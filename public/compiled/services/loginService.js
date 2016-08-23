'use strict';

angular.module('app').service('loginService', loginService);

function loginService($http) {
  this.getMyCmInfo = function () {
    return $http({
      method: 'POST',
      url: '/login/cm'
    }).then(function (response) {
      return response.data;
    });
  };
  // this.techLogin = () => {
  //   return $http ({
  //     method: 'POST',
  //     url: '/login/cm'
  //   }).then((response) => {
  //     return response.data;
  //   });
  // };
  this.authUser = function (user) {
    return $http({
      method: 'GET',
      url: '/api/auth/:$(user)'
    });
  };
  this.getMyTechInfo = function () {
    return $http({
      method: 'GET',
      url: '/api/tech'
    });
  };
}